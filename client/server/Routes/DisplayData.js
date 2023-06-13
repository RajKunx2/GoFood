const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log();
    res.send([global.FOOD_ITEMS, global.FOOD_CATEGORY]);
  } catch (err) {
    console.log(err.message);
    res.send("SERVER ERROR");
  }
});

module.exports = router;
