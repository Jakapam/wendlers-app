const mongoose = require("./index").mongoose;

const workoutSchema = mongoose.Schema({
  completed: { type: Boolean, default: false },
  warmupSets: [{ lift: String, weight: Number, reps: Number }],
  mainSets: [{ lift: String, weight: Number, reps: Number, oneRepMax: Number }]
});

exports.workoutSchema = workoutSchema;
exports.Workout = mongoose.model("Workout", workoutSchema);
