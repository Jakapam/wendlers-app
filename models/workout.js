const mongoose = require("./index").mongoose;

const workoutSchema = mongoose.Schema({
  warmupSets: [{ lift: String, weight: Number, reps: Number }],
  mainSets: [{ lift: String, weight: Number, reps: Number }]
});

exports.workoutSchema = workoutSchema;
