const mongoose = require("mongoose");
const uuid = require("uudiv1");
const crypto = require("crypto");
const { stringify } = require("querystring");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: String,
},
{
    timestamp: true,
})

module.exports = mongoose.model("User", userSchema)
