const Workout = require("../models/workout").Workout;

exports.show = (req, res) => {
  Workout.findById(req.params.id, (err, workout) => {
    return res.status(201).json({ workout });
  });
};
