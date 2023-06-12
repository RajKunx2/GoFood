const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 8 }),
    body("name").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body.name}!`);
    }
    res.send({ errors: result.array() });

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
);

router.post("/loginuser", [body("email").isEmail()], async (req, res) => {
  let email = req.body.email;

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send(`Hello, ${req.body.name}!`);
  }

  try {
    let userdata = await User.findOne({ email });
    if (!userdata) {
      return res
        .status(400)
        .json({ errors: "Try loggin in with the correct email address" });
    }
    if (req.body.password !== userdata.password) {
      return res
        .status(400)
        .json({ errors: "Try loggin in with the correct email address" });
    }
    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
