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
				homeLocation: {
					type: String,
					required: true,
				},
				spokenLangs: {
					type: Array,
					required: true,
				},
				education: {
					type: [
						new mongoose.Schema({
							entity: {
								type: String,
								required: true,
								trim: true,
							},
							qualification: {
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
							entity: {
								type: String,
								required: true,
								trim: true,
							},
							jobRole: {
								type: String,
								required: true,
								trim: true,
							},
							technologies: {
								type: Array,
								required: true,
							},
							period: {
								type: Array,
								trim: true,
							},
							responsabilities: {
								type: String,
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
					type: Array,
					validate(value) {
						if (!validator.isURL(value))
							throw new Error("Not a valid URL!");
					},
				},
				portfolio: {
					type: String,
					trim: true,
					validate(value) {
						if (!validator.isURL(value))
							throw new Error("Not a valid URL!");
					},
				},
				avatar: {
					type: Buffer,
				},
			}),
		},
	},
	{ timestamps: true }
);

const Developer = new mongoose.model("Developer", devSchema);

module.exports = Developer;
