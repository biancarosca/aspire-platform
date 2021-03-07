const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const devSchema = new mongoose.Schema(
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
				spokenLangs: {
					type: [String],
					validate(value) {
						value.forEach((element) => {
							if (typeof element !== "string")
								throw new Error("Not an array of strings.");
						});
					},
				},
				homeLocation: {
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
				education: {
					type: [
						new mongoose.Schema({
							institution: {
								type: String,
								required: true,
								trim: true,
							},
							degree: {
								type: String,
								required: true,
								trim: true,
							},
							period: {
								type: Array,
								required: true,
								trim: true,
							},
						}),
					],
				},
				workExp: {
					type: [
						new mongoose.Schema({
							company: {
								type: String,
								required: true,
								trim: true,
							},
							jobTitle: {
								type: String,
								required: true,
								trim: true,
							},
							period: {
								type: Array,
								trim: true,
							},
						}),
					],
				},
				bio: {
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
				portfolio: {
					type: [
						new mongoose.Schema({
							github: {
								type: String,
								required: true,
								trim: true,
								validate(value) {
									if (!validator.isURL(value))
										throw new Error("Not a valid URL!");
								},
							},
							demo: {
								type: String,
								required: true,
								trim: true,
								validate(value) {
									if (!validator.isURL(value))
										throw new Error("Not a valid URL!");
								},
							},
							description: {
								type: String,
								required: true,
								trim: true,
							},
						}),
					],
				},
				avatar: {
					type: Buffer,
				},
			}),
			required: [true, "Profile details are required."],
		},
	},
	{ timestamps: true }
);

//before saving to db hash the password
devSchema.pre("save", async function (next) {
	const dev = this;

	if (dev.isModified("password"))
		dev.password = await bcrypt.hash(dev.password, 8);

	next();
});

devSchema.methods.generateAuthToken = async function (res) {
	const dev = this;
	const accessToken = jwt.sign(
		{ _id: dev._id.toString() },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: "15s" }
	);
	const refreshToken = jwt.sign(
		{ _id: dev._id.toString() },
		process.env.REFRESH_TOKEN_SECRET
	);

	dev.tokens = dev.tokens.concat({ token: { accessToken, refreshToken } });
	await dev.save();
	res.cookie("refresh_token", refreshToken, { httpOnly: true, path: "/" }); //refresh token set in cookie

	return accessToken;
};

const Developer = new mongoose.model("Developer", devSchema);

module.exports = Developer;
