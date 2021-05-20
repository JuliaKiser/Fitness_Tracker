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