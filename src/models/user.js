// User model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    username : {
        type : String,
        required : true,
        unique : true,
        minlength : [3, 'Username must be at least 3 characters.']
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
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
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    picture : {
        type : Object,
        required: false,
    },

}, {
    timestamps : true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

