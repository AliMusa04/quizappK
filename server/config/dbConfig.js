const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Kenan:Z0kcRFiKEoxSfprt@cluster.yah8f3d.mongodb.net/quizlet"
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo Db Connection Failed");
});

module.exports = connection;
