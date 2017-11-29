const mongoose = require("./index").mongoose;
const Program = require("./program").Program;

const exerciseDataTypes = {
  deadlift: Number,
  benchpress: Number,
  militaryPress: Number,
  squat: Number
};

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
  startingOneRepMaxes: exerciseDataTypes,
  currentOneRepMaxes: exerciseDataTypes,
  personalRecords: exerciseDataTypes
});

exports.User = mongoose.model("User", userSchema);
