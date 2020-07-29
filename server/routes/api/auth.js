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
  const { email, password } = req.body;

  //-- Check if User email/username exists in DB
  try {
    let user = await User.findOne({ email }).lean();
    //-- Check User exists(???)
    if (!user) {
      return res
        .status(403)
        .json({ errors: { msg: "Invalid Credentials" } });
    }

    //-- Check Password
    const passwordValid = await bcrypt.compare(password, user.password);
    console.log("*****");
    console.log(passwordValid);

    if (!passwordValid) {
      return res
        .status(403)
        .json({ errors: { msg: "Invalid Credentials" } });
    }
    //-- JWT Tokens
    const payload = {
      user: {
        id: user._id,
        email
      }
    }

    jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: err, message: 'Something went wrong.' });
      }
      const userInfo = {
        first: user.first,
        id: user._id
      }
      
      //-- Response
      return res.json({
        message: 'Authentication successful!',
        success: true,
        token,
        userInfo,
        // expiresAt,
        user_obj: user
      });
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }

});



module.exports = router;