const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwt_secret = require("../config").JWT_SECRET;
const bcrypt = require("bcrypt");

exports.test = (req, res) => {
  return res.status(201).json({ test: "test successful!" });
};

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
          const token = jwt.sign({ id: user.id }, jwt_secret);
          res.status(201).json({ username: user.username, token });
        }
      }
    );
  });
};
