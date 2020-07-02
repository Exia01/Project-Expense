const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../models/UserSchema');

// @route     GET /api/users
// @desc      Find All Users Route
// @access    Public
router.get("/", (req, res) => {
    User.find({})
        .then(allUsers => {
            // -- TESTING -- //
            // console.log(allUsers);
            res.status(200).json(allUsers);
        })
        .catch(err => {
            console.log(err);
        });
});

//-- TESTING --//
router.post('/', (req, res) => {
  console.log("Hit Post Route");
  res.status(200).json({ success: true, data: [{ name: "Bibbs"}] })
})


// @route     POST /api/users/create
// @desc      User Create/Register Route
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

          //-- Response
        //   res.status(201).json({ success: true, user_obj: user });
        } catch(err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }

});

module.exports = router;