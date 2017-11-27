const User = require("../models/user");
const jwt_secret = require("../config").JWT_SECRET;
const bcrypt = require("bcrypt");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwt_secret;

const strategy = new JwtStrategy(opts, (jwt_payload, next) => {
  console.log(jwt_payload);
  User.findOne({ _id: jwt_payload.id }, (err, user) => {
    if (err) {
      return next(err, false);
    }
    if (user) {
      return next(null, user);
    } else {
      return next(null, false);
    }
  });
});

passport.use(strategy);

exports.passport = passport;
