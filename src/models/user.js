// User model

import { Schema as _Schema } from 'mongoose';
import mongoose from 'mongoose';
const Schema = _Schema;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    phone : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        Select : false,
    },
    country : {
        type : String,
    },
    age : {
        type : Number
    },
    gender : {
        type : String,
    },
    picture : {
        type : Object,
    },

}, {
    timestamps : true,
});

const User = mongoose.model('User', userSchema);

export default User;

