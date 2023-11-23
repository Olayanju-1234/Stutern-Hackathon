// Reminder model

import { Schema as _Schema } from 'mongoose';
import mongoose from 'mongoose';
const Schema = _Schema;

const reminderSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    medicine : {
        type : Schema.Types.ObjectId,
        ref : 'Medicine',
    },
    time : {
        type : Date,
        required : true,
    },
    status : {
        type : Boolean,
        default : false,
    },
}, {
    timestamps : true,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;
