const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("email", "Invalid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const { name, password, email, location } = req.body;
      if (!name || !password || !email || !location) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }
      await User.create({ name, password:secPassword, email, location });
      console.log(req.body)
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const userdata = await User.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ error: "Try logging with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(password, userdata.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ error: "Try logging with correct credentials" });
      }
      console.log("login api hit", req.body);

      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
