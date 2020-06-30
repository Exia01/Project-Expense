// //Login Middleware
const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
    //-- Get Token from Header
    const token = req.header('x-auth-token');

    //-- Check for Token
    if(!token) {
        return res.status(401).json({ msg: 'No Token, Authorization Required'});
    }

    //-- Verify Token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //-- Load User obj on REQUEST
        req.user = decoded.user;
        //-- Go to next middleware function
        next();
    } catch(err) {
        console.log(err);
        res.status(401).json({ msg: "Token not valid" });
    }
}

// var userMiddleware = {};

// // checks if user is logged in
// userMiddleware.isLoggedIn = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     // console.log(req.headers.referer)
//     // console.log(req.url)
//     req.session.redirectUrl = req.originalUrl;
//     req.flash('error', 'Sorry, you need to be logged in to do that');
//     return res.redirect('/accounts/login');
// };
// module.exports = userMiddleware;
