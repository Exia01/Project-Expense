const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require('../../models/UserSchema');

// @route     GET /api/users
// @desc      Find All Users Route
// @access    Public
router.get("/", (req, res) => {
    User.find({})
        .then(results => {
            console.log(results);
            res.status(200).json(results);
        })
        .catch(err => {
            console.log(err);
        });
});


// @route     POST /api/users/create
// @desc      User Create Route
// @access    Public
router.post("/create", async (req, res) => {
    // -- TESTING -- //
    console.log(req.body);
    //-- Destructure User POST Request
    let { first, last, username, email, password } = req.body;

    //-- Check if User email/username exists in DB
    try {
          let user = await User.findOne({ email });
          //-- Check User exists(???)
          if (user) {
            return res
              .status(400)
              .json({ errors: [{ msg: "User already exists!" }] });
          }
          // -- TESTING -- //
        //   console.log(user);
        //   console.log("***********");

          //-- Create temp User Obj
          user = new User({
            first: first,
            last: last,
            username: username,
            email: email,
            password: password,
          });

          // -- TESTING -- //
        //   console.log(user);

          //-- Encrypt User Entered Password
          let salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);

          // -- TESTING -- //
        //   console.log(user);

          //-- Save User to DB
          await user.save();

          //-- Response
          res.status(201).json({ success: true, user_obj: user });
        } catch(err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }

});

module.exports = router;