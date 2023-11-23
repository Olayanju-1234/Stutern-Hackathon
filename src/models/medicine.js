//  User medicine & schedule model

import { Schema as _Schema } from 'mongoose';
import mongoose from 'mongoose';
const Schema = _Schema;

const medicineSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    type : {
        type: String,
        required : true,
        enum : ['Pill', 'Syrup'],
    },
    dosage : {
        type : Number,
        required : true,
    },
    duration : {
        type : Number,
        required : true,
    },
    schedule : {
        type : Number
    },
    startDate : {
        type : Date,
        required : true,
    },
    endDate : {
        type : Date,
        required : true,
    },
    when : {
        type : String,
        required : true,
        enum : ['Before Meal', 'After Meal', 'During Meal'],
    },

}, {
    timestamps : true,
});

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;

