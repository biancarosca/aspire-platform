const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const chalk = require("chalk");
//import routers
const devRouter = require("./routers/devRouter");

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api",devRouter);


app.get("/", (req, res) => {
	res.send("Server is running");
});

app.listen(PORT, () =>
	console.log(chalk.blue.bold(`Server is running on port ${PORT}`))
);
