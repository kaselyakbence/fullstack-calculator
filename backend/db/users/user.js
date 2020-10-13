const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: { type: String, required: true, trim: true, unique: true },
  numbers: [
    {
      key: {
        type: String,
        required: true,
        trim: true,
      },
      value: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("User", User);
