const express = require('express');
const router = express.Router();
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



module.exports = router;