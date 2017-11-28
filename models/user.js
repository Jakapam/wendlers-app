const mongoose = require("./index").mongoose;
const Program = require("./program").Program;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password_digest: {
    type: String,
    required: true,
    unique: true
  },
  startingOneRepMaxes: {
    deadlift: Number,
    benchpress: Number,
    squat: Number,
    militaryPress: Number
  },
  currentOneRepMaxes: {
    deadlift: Number,
    benchpress: Number,
    squat: Number,
    militaryPress: Number
  },
  personalRecords: {
    deadlift: Number,
    benchpress: Number,
    squat: Number,
    militaryPress: Number
  }
});

userSchema.methods.generateProgram = function() {
  console.log(this);
  const program = new Program({ user: this._id });
  for (let i = 0; i < 12; i++) {
    program.cycles.push({
      trainingMaxes: {
        deadlift: this.startingOneRepMaxes.deadlift * 0.9 + i * 10,
        benchpress: this.startingOneRepMaxes.benchpress * 0.9 + i * 5,
        squat: this.startingOneRepMaxes.squat * 0.9 + i * 10,
        militaryPress: this.startingOneRepMaxes.militaryPress * 0.9 + i * 5
      }
    });
  }
  console.log(program);
  return program;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
