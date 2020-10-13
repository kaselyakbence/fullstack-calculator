const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@calculator.lykfn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("DB disconnected");
    process.exit(0);
  });
});

module.exports = mongoose;
