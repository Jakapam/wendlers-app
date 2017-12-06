const mongoose = require("./index").mongoose;
const Schema = mongoose.Schema;
const cycleSchema = require("./cycle").cycleSchema;
const User = require("./user").User;
const exerciseDataTypes = {
  deadlift: Number,
  benchpress: Number,
  militaryPress: Number,
  squat: Number
};

const programSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: String
  },
  startingOneRepMaxes: exerciseDataTypes,
  cycles: [cycleSchema]
});

programSchema.pre("save", function(next) {
  if (this.isNew) {
    for (let i = 0; i < 12; i++) {
      this.cycles.push({
        trainingMaxes: {
          deadlift: this.startingOneRepMaxes.deadlift * 0.9 + i * 10,
          benchpress: this.startingOneRepMaxes.benchpress * 0.9 + i * 5,
          squat: this.startingOneRepMaxes.squat * 0.9 + i * 10,
          militaryPress: this.startingOneRepMaxes.militaryPress * 0.9 + i * 5
        }
      });
      this.cycles[i].generateWorkouts();
    }
  }
  next();
});

const Program = mongoose.model("Program", programSchema);

exports.Program = Program;
