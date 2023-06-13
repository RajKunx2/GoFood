const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const jwtSecret = "sothisismyownnewjwtsecret";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 8 }),
    body("name").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
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

    const pwdCompare = await bcrypt.compare(
      req.body.password,
      userdata.password
    );
    if (!pwdCompare) {
      return res
        .status(400)
        .json({ errors: "Try loggin in with the correct email address" });
    }

    const data = {
      user: {
        id: userdata.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken: authToken });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
