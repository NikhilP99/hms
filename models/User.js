const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    userType: {
        type: String,
        required: true,
        unique: false,
        trim: false
    }
})


const User = mongoose.model('User', UserSchema)

module.exports = User;
