const express = require("express");

const { v4: uuidv4 } = require("uuid");

const User = require("../db/users/user");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    let user = new User({ id: uuidv4(), numbers: [] });
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.send({ error });
  }
});

module.exports = userRouter;
