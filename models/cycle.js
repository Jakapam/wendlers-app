const mongoose = require("./index").mongoose;

const cycleSchema = mongoose.Schema({
  trainingMaxes: {
    deadlift: Number,
    benchpress: Number,
    militaryPress: Number,
    squat: Number
  },
  cyclePR: {
    dealift: Number,
    benchpress: Number,
    militaryPress: Number,
    squat: Number
  },
  cycleOneRepMaxes: {
    dealift: Number,
    benchpress: Number,
    militaryPress: Number,
    squat: Number
  }
});

exports.cycleSchema = cycleSchema;
