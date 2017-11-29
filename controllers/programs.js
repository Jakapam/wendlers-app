const Program = require("../models/program").Program;

exports.test = (req, res) => {
  return Program.findOne({ user: req.user._id }, (err, program) => {
    if (err) {
      res.status(400).json({ error: "Error" });
    } else {
      res.status(201).json({ payload: program });
    }
  });
};
