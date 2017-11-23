const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("..config.js");
const bcrypp = require("bcrypt");

exports.create = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password);

  return User.create(
    {
      username: req.body.username,
      password_digest: hash
    },
    (err, user) => {
      if (err) {
        res.status(400).send({ error: "request issue" });
      } else {
        const token = jwt.sign(
          {
            id: user.id
          },
          config.JWT_SECRET,
          { expiresIn: "24h" }
        );
        res.status(201).send({ token });
      }
    }
  );
};
