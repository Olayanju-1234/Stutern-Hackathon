// Reminder model

import { Schema as _Schema } from 'mongoose';
import mongoose from 'mongoose';
const Schema = _Schema;

const reminderSchema = new Schema({
    medicine : {
        type : Schema.Types.ObjectId,
        ref : 'Medicine',
    },
    isTaken : {
        type : Boolean,
        default : false,
    },
}, {
    timestamps : true,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;
