const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');

const User = require('../../models/UserSchema');
const { hashPassword, createToken } = require('../../utils')

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
  //-- Check if User email/username exists in DB
  try {
    const { first, last, username, email, password } = req.body;
    let user = await User.findOne({ email }).lean();

    if (user) { //if user found
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!' }] });
    }


    //-- Encrypt User Entered Password
    const hashedPassword = await hashPassword(password)

    //-- Create temp User Obj
    user = new User({
      first,
      last,
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });


    //-- Save User to DB
    const savedUser = await user.save();


    if (savedUser) {
      const payload = {
        user: {
          id: user._id,
          email
        },
      };

      const token = createToken(savedUser);
      console.log('hit here');
      console.log(token);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const userInfo = {
        first: user.first,
        email: user.email,
      }
      return res.json({
        message: 'User created!',
        token: token,
        success: true,
        userInfo,
        expiresAt
      });

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
    console.log(err);
    return res.status(400).json({
      message: 'There was a problem creating your account'
    });
  }
});

module.exports = router;
