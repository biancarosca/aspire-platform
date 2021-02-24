const mongoose = require("mongoose");
require("dotenv").config();
const chalk = require("chalk");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(chalk.cyan.bold("DB connected!"));
	} catch (error) {
		console.log(chalk.red.bold(error.message));
	}
};

connectDB();
