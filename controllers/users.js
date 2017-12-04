const User = require("../models/user").User;
const jwt = require("jsonwebtoken");
const jwt_secret = require("../config").JWT_SECRET;
const bcrypt = require("bcrypt");

exports.create = (req, res) => {
  return bcrypt.hash(req.body.password, 10).then(hash => {
    User.create(
      {
        username: req.body.username,
        password_digest: hash
      },
      (err, user) => {
        if (err) {
          res.status(400).json({ error: "request issue" });
        } else {
          const token = jwt.sign({ id: user._id }, jwt_secret);
          res.status(201).json({ username: user.username, token });
        }
      }
    );
  });
};

exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Sorry, something went wrong!" });
    }

    if (user === null) {
      return res.status(401).json({ error: "Invalid Username or Password!" });
    }

    return bcrypt.compare(req.body.password, user.password_digest, function(
      err,
      response
    ) {
      if (response) {
        const token = jwt.sign({ id: user._id }, jwt_secret);
        res.status(201).json({ username: user.username, token, response });
      } else {
        res.status(401).json({ error: "Invalid Username or Password!" });
      }
    });
  });
};

exports.update = (req, res) => {
  return User.findById(req.user._id, (err, user) => {
    user.set(req.body);
    user.save((err, user) => {
      res.status(201).json({
        username: user.username,
        startingOneRepMaxes: user.startingOneRepMaxes,
        currentOneRepMaxes: user.currentOneRepMaxes
      });
    });
  });
};
