const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');
 
module.exports = function(passport) {
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      User.getUserById(jwt_payload._doc._id, (err, user) => {
         if (err) {
         	  return done(err, false);
         }
         if (user) {
            const loggedUser = {
                userId :user._id,
                name: user.name,
                userName: user.username,
                email: user.email
            };
         	  return done(null, loggedUser);
         } else {
         	 return done(null, false);
         }
      });
  }));
}