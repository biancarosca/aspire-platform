const mongoose = require("mongoose");
const validator = require("validator");

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

const Developer = new mongoose.model("Developer", devSchema);

module.exports = Developer;
