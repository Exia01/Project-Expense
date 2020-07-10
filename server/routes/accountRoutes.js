const express           = require('express');
const router            = express.Router();
const passport          = require('passport')
const LocalStrategy     = require('passport-local')
const User              = require('../models/UserSchema')
const userMiddleware    = require('../middleware/auth')

  // passport setup
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/register', (req, res, next) => {
    let password = req.body.password
    let newUser = new User({username: req.body.username})
    User.register(newUser, password, (err, user) => {
      if (err) {
        console.log(err)
        req.flash("error", err.message)
        return res.send("Error registering")
      }
      passport.authenticate("local")(req, res, function () {
        res.send("Successfully registered and logged in!")
      })
    })
  })
  

//login logic
router.post("/login", passport.authenticate("local", {
  failureRedirect:"/",
}), (req, res) => {
    console.log("Logged In")
    res.send("Logged in!")
})


module.exports = router;