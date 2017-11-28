const mongoose = require("./index").mongoose;

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
    deadlift1RM: Number,
    benchpress1RM: Number,
    squat1RM: Number,
    militaryPress1RM: Number
  },
  currentOneRepMaxes: {
    deadlift1RM: Number,
    benchpress1RM: Number,
    squat1RM: Number,
    militaryPress1RM: Number
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
