const express = require("express");
const router = express.Router();

// @route     GET /api/users
// @desc      Test Route
// @access    Public
router.get("/", (req, res) => {
  res.send("Users Route");
});


// @route     POST /api/users
// @desc      User Create Route
// @access    Public
router.post("/create", (req, res) => {

    // console.log(req);
    console.log(req.body);
    let { username, email, password } = req.body;

    let user = {
        username: username,
        email: email,
        password: password
    }

    res.status(201).json({ "success": true, "user_obj": user });
});

module.exports = router;