const express = require("express");
var fs = require("fs");

const app = express();
const port = 5000;

app.use(express.json());

// A rootra érkező get kéréssel lehet lekérni a számot
app.get("/", (req, res) => {
  try {
    let num = parseInt(fs.readFileSync("./db/db.txt", "utf-8"));
    res.send({ num });
  } catch (error) {
    res.send({ error: "Nem sikerült a lekérés!" });
  }
});

// A rootra érkező post kéréssel lehet menteni a számot
app.post("/", async (req, res) => {
  let num = req.body.num;

  if (!Number.isInteger(num)) {
    res.status(400).send({ error: "Invalid kérés!" });
  } else {
    try {
      fs.writeFileSync("./db/db.txt", num);
    } catch (error) {
      res.status(500).send({
        error: "Nem sikerült a mentés",
      });
    }

    res.send({ msg: "Saved" });
  }
});

//Ha az oldal nem található
app.use(function (req, res, next) {
  res.status(404).send({ error: "Az oldal nem található" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
