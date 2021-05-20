const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter an exercise type."
        },
        weight: {type: Number},
        sets: {type: Number},
        reps: {type:Number},
        distance: {type:Number},
        duration: {type:Number}
    }]   
}, {
    toJSON: {
        virtuals: true
    }
})

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(total,current) {
        return total + current.duration;
    },0)
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;