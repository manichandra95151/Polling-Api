const mongoose = require("mongoose");
// mongoDB atlas uri
const URI =
  "mongodb+srv://manii:123@cluster0.trz5bjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connecting to mongoDB atlas
const db = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};
module.exports = db;
