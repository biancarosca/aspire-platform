const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const chalk = require("chalk");
//import routers
const devRouter = require("./routers/devRouter");

const app = express();

//middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", devRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.listen(PORT, () =>
	console.log(chalk.blue.bold(`Server is running on port ${PORT}`))
);
