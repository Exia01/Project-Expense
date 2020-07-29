const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/UserSchema');

const { hashPassword } = require('../../utils')

// @route     GET /api/users
// @desc      Find All Users Route
// @access    Public
router.get('/', (req, res) => {
  User.find({})
    .then((allUsers) => {
      // -- TESTING -- //
      // console.log(allUsers);
      res.status(200).json(allUsers);
    })
    .catch((err) => {
      console.log(err);
    });
});

//-- TESTING --//
router.post('/', (req, res) => {
  console.log('Hit Post Route');
  res.status(200).json({ success: true, data: [{ name: 'Bibbs' }] });
});

// @route     POST /api/users/create
// @desc      User Create/Register Route
// @access    Public
router.post('/create', async (req, res) => {
  // -- TESTING -- //
  console.log(req.body);
  const { first, last, username, email, password } = req.body;
  //-- Check if User email/username exists in DB
  try {
    let user = await User.findOne({ email }).lean();

    if (user) { //if user found
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!' }] });
    }


    //-- Create temp User Obj
    user = new User({
      first,
      last,
      username,
      email: email.toLowerCase(),
      password: password,
    });

    // -- TESTING -- //
    //   console.log(user);

    //-- Encrypt User Entered Password
    user.password = await hashPassword(password)

    // -- TESTING -- //
    //   console.log(user);

    //-- Save User to DB
    const savedUser = await user.save();


    if (savedUser) {
      const payload = {
        user: {
          id: user._id,
          email
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1h' },
        (err, token) => {
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          }
          const userObj = {
            first: user.first,
            email: user.email,
          }
          res.json({
            message: 'User created!',
            token: token,
            success: true,
            user_obj
          });
        }
      );

    }
    else {
      return res.status(400).json({
        message: 'There was a problem creating your account'
      });
    }
    //-- JWT Tokens

    //-- Response
    //   res.status(201).json({ success: true, user_obj: user });
  } catch (err) {
    return res.status(400).json({
      message: 'There was a problem creating your account'
    });
  }
});

module.exports = router;
