const Program = require("../models/program").Program;

exports.create = (req, res) => {
  Program.create(
    { user: req.user._id, startingOneRepMaxes: req.body.startingOneRepMaxes },
    (err, program) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "Error!" });
      } else {
        return res.status(201).json(program);
      }
    }
  );
};

exports.show = (req, res) => {
  return Program.findOne({ user: req.user._id }, (err, program) => {
    if (err) {
      res.status(400).json({ error: "Error" });
    } else {
      res.status(201).json({ payload: program });
    }
  });
};
