const mongoose = require('mongoose');

const mongoURL =
  "mongodb+srv://itismerajshekhar:MR.GAMEX09479@cluster0.xoqcd5r.mongodb.net/GoFood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected successfully");
    const fetchedData = await mongoose.connection.db.collection("FOOD_ITEMS");
    const data = await fetchedData.find({}).toArray();
    console.log();
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoDB;
