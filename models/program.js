const mongoose = require("./index").mongoose;
const cycleSchema = require("./cycle").cycleSchema;

const programSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: String
  },
  cycles: [cycleSchema]
});

const Program = mongoose.model("Program", programSchema);

exports.Program = Program;
