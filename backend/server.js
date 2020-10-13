const express = require("express");

require("dotenv").config({ path: __dirname + "/.env" });

require("./db/db");

const cors = require("cors");

const numbersRouter = require("./routes/numbersRouter");
const userRouter = require("./routes/userRouter");

const app = express();

//Cross-Origin Resource Sharing headers
app.use(cors());

//Parsing incoming request body to json
app.use(express.json());

//Use numbers router
app.use("/number", numbersRouter);

//Use user router
app.use("/user", userRouter);

//If the page does not exist
app.use(function (req, res, next) {
  res.status(404).send({ error: "Az oldal nem található" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
