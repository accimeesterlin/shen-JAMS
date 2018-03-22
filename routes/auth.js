var authController = require('../controllers/authcontroller.js');
var passport = require('passport');

module.exports = function (app) {
    app.get('/signup', authController.signup);
    app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    })),
    app.get('/home', isLoggedIn, authController.home);
    app.get('/logout', authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/signin'
    }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    };
}