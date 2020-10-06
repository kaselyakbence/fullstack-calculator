const express = require("express");
var fs = require("fs");

var cors = require("cors");
const e = require("express");

var app = express();

const port = 5000;

//Cross-Origin Resource Sharing headers
app.use(cors());

//Parsing incoming request body to json
app.use(express.json());

// Handling a GET request to the root
app.get("/", (req, res) => {
  try {
    let num = fs.readFileSync("./db/db.txt", "utf-8");
    console.log(num);
    res.send({ num });
  } catch (error) {
    //Send an error if reading the file was unsuccesfull
    res.send({ error: "Nem sikerült a lekérés!" });
  }
});

// Handling a POST request to the root
app.post("/", async (req, res) => {
  let num = req.body.num;

  //Check if the value is a number(with or without decimal)
  if (!/^-?\d*\.?\d*$/.test(num)) {
    res.status(400).send({ error: "Invalid kérés!" });
  } else {
    try {
      //Save to a .txt file
      fs.writeFileSync("./db/db.txt", num);

      //Send an acknowledgement if saving was succesfull
      res.send({ msg: "Saved" });
    } catch (error) {
      // Send error if saving was unsuccesfull
      res.status(500).send({
        error: "Nem sikerült a mentés",
      });
    }
  }
});

//If the page does not exist
app.use(function (req, res, next) {
  res.status(404).send({ error: "Az oldal nem található" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
