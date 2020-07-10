const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authorized = require('../../middleware/auth');
const User = require('../../models/UserSchema');


// @route     GET /api/auth
// @desc      Test Auth Route
// @access    Public
router.get("/", authorized, async (req, res) => {
  console.log(req.user);
  try {
    //-- Find User in DB
    const user = await User.findById(req.user.id).select("-password");
    //-- Return User
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});


// @route     POST /api/auth/login
// @desc      User Login Route
// @access    Public
router.post("/login", async (req, res) => {
    // -- TESTING -- //
    console.log(req.body);
    //-- Destructure User POST Request
    let { email, password } = req.body;

    //-- Check if User email/username exists in DB
    try {
      let user = await User.findOne({ email });
      //-- Check User exists(???)
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //-- Check Password
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("*****");
      console.log(isMatch);

      if(!isMatch) {
        return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      //-- JWT Tokens
      const payload = {
          user: {
            id: user._id
          }
      }

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
        if(err) {
            console.log(err)
            return res.status(500).json(err);
        }
        //-- Response
        res.json({ token: token, success: true, user_obj: user });
      });

    } catch(err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }

});



module.exports = router;