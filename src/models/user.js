// User model

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
    dateOfBirth : {
        type : Date,
    },
    picture : {
        type : Object,
    },

}, {
    timestamps : true,
});

const User = mongoose.model('User', userSchema);

export default User;

