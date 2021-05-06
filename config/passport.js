const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
require('dotenv').config();
 
module.exports = function(passport) {
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = process.env.SECRET;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      User.getUserById(jwt_payload._id, (err, user) => {
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