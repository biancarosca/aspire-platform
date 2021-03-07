const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const recruiterSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value))
					throw new Error("Email is invalid!");
			},
		},
		password: {
			type: String,
			required: true,
			minlength: [6, "The password must have at least 6 characters"],
		},
		tokens: [
			{
				token: {
					accessToken: { type: String, required: true },
					refreshToken: { type: String, required: true },
				},
			},
		],
		profile: {
			type: new mongoose.Schema({
				firstName: {
					type: String,
					required: true,
					trim: true,
				},
				lastName: {
					type: String,
					required: true,
					trim: true,
				},
				location: {
					type: new mongoose.Schema({
						city: {
							type: String,
							trim: true,
						},
						country: {
							type: String,
							trim: true,
						},
					}),
				},
				companyDescription: {
					type: String,
					trim: true,
				},
				socialLinks: {
					type: [String],
					validate(value) {
						value.forEach((link, idx) => {
							if (!validator.isURL(link))
								throw new Error(
									`URL number ${idx} is not a valid URL!`
								);
						});
					},
				},

				logo: {
					type: Buffer,
				},
			}),
			required: [true, "Profile details are required."],
		},
	},
	{ timestamps: true }
);

// before saving to db hash the password
recruiterSchema.pre("save", async function (next) {
	const recruiter = this;

	if (recruiter.isModified("password"))
		recruiter.password = await bcrypt.hash(recruiter.password, 8);

	next();
});

recruiterSchema.statics.findByCredentials = async function (email, password) {
	try {
		const recruiter = await Recruiter.findOne({ email });
		const isMatch = await bcrypt.compare(password, recruiter.password);
		if(isMatch)
			return recruiter;
	} catch {
		return null;
	}
};

recruiterSchema.methods.generateAuthToken = async function (res) {
	const recruiter = this;
	const accessToken = jwt.sign(
		{ _id: recruiter._id.toString() },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: "15s" }
	);
	const refreshToken = jwt.sign(
		{ _id: recruiter._id.toString() },
		process.env.REFRESH_TOKEN_SECRET
	);

	recruiter.tokens = recruiter.tokens.concat({
		token: { accessToken, refreshToken },
	});
	await recruiter.save();
	res.cookie("refresh_token", refreshToken, { httpOnly: true, path: "/" }); //refresh token set in cookie

	return accessToken;
};

const Recruiter = new mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;
