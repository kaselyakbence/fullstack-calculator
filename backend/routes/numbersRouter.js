const express = require("express");

const numbersRouter = express.Router();
const User = require("../db/users/user");

// Handling a GET request to the root
// Returning all key-value pair of a given user
numbersRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  let user = await User.findOne({ id });

  if (user) {
    res.status(200).send(user.numbers);
  } else {
    res.status(400).send({ error: "UserId not valid" });
  }
});

// Handling a POST request to the root
numbersRouter.post("/:id", async (req, res) => {
  let { id } = req.params;

  let { key, value } = req.body;

  let number = {
    key,
    value,
  };
  if (key === "" || value === "") {
    res.status(400).send({ error: "UserId not valid" });
  } else {
    let user = await User.findOne({ id });

    if (user) {
      User.updateOne(
        { id },
        { $push: { numbers: number } },
        (error, succes) => {
          if (error) {
            res.status(400).send({ error: "Invalid request" });
          } else {
            res.send({ msg: "Done" });
          }
        }
      );
    } else {
      res.status(400).send({ error: "UserId not valid" });
    }
  }
});

module.exports = numbersRouter;
