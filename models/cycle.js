const mongoose = require("./index").mongoose;
const workoutSchema = require("./workout").workoutSchema;

const exerciseDataTypes = {
  deadlift: Number,
  benchpress: Number,
  militaryPress: Number,
  squat: Number
};

const exerciseTemplates = {
  deadlift: workoutSchema,
  benchpress: workoutSchema,
  militaryPress: workoutSchema,
  squat: workoutSchema
};

const cycleSchema = mongoose.Schema({
  trainingMaxes: exerciseDataTypes,
  five: exerciseTemplates,
  three: exerciseTemplates,
  one: exerciseTemplates,
  deload: exerciseTemplates
});

const calculateWeightForReps = (modifier, trainingMaxes, repScheme) => {
  const exerciseSets = {};

  for (exercise in trainingMaxes) {
    exerciseSets[exercise] = {
      warmupSets: [
        {
          weight: trainingMaxes[exercise] * 0.4,
          reps: 5
        },
        {
          weight: trainingMaxes[exercise] * 0.5,
          reps: 5
        },
        {
          weight: trainingMaxes[exercise] * 0.6,
          reps: 3
        }
      ],
      mainSets: [
        {
          weight: trainingMaxes[exercise] * 0.65 + modifier,
          reps: repScheme[0]
        },
        {
          weight: trainingMaxes[exercise] * 0.75 + modifier,
          reps: repScheme[1]
        },
        {
          weight: trainingMaxes[exercise] * 0.85 + modifier,
          reps: repScheme[2]
        }
      ]
    };
  }

  return exerciseSets;
};

cycleSchema.methods.generateWorkouts = function() {
  this.five = calculateWeightForReps(0, this.trainingMaxes, [5, 5, 5]);
  this.three = calculateWeightForReps(0.05, this.trainingMaxes, [3, 3, 3]);
  this.one = calculateWeightForReps(0.1, this.trainingMaxes, [5, 3, 1]);
  this.deload = calculateWeightForReps(-0.25, this.trainingMaxes, [5, 5, 5]);
};

exports.cycleSchema = cycleSchema;
