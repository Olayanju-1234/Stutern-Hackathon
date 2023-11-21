// Reminder model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
