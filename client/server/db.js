const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://itismerajshekhar:MR.GAMEX09479@cluster0.xoqcd5r.mongodb.net/GoFood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected successfully");
    const fetched_data = await mongoose.connection.db.collection("FOOD_ITEMS");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("FOOD_CATEGORY");
    const catData = await foodCategory.find({}).toArray();
    global.FOOD_ITEMS = data;
    global.FOOD_CATEGORY = catData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;
