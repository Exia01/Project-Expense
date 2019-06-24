//Login Middleware
const Campground                = require('../models/CampSchema');
const Comment                   = require('../models/CommentSchema');

var userMiddleware = {};

// checks if user is logged in
userMiddleware.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // console.log(req.headers.referer)
    // console.log(req.url)
    req.session.redirectUrl = req.originalUrl;
    req.flash('error', 'Sorry, you need to be logged in to do that');
    return res.redirect('/accounts/login');
};
module.exports = userMiddleware;
