const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const chalk = require("chalk");
//import routers
const devRouter = require("./routers/devRouter");
const recruiterRouter = require("./routers/recruiterRouter");
const authRouter = require("./routers/authRouter");

const app = express();

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", devRouter);
app.use("/api",recruiterRouter);
app.use("/api",authRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.listen(PORT, () =>
	console.log(chalk.blue.bold(`Server is running on port ${PORT}`))
);
