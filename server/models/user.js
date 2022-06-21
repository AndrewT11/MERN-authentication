const mongoose = require("mongoose");
const uuid = require("uuidv1");
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

// virtual field
userSchema.virtual("password").set(function (passowrd) {
    // create a temp variable called _password
    this._passowrd = password;

    // generate a timestamp, uuidv1 gives us the unix timestamp
    this.salt = uuidv1();

    // encrypt the password function call. encryptPassword is a custom method we create. Not included in any packages.
    this.hashedPassword = this.encryptPassword(password);
})

// methods
userSchema.methods =    {
    encryptPassword: function (password) {
        if (!password) {
            return "";
        }
        try {
            return crypto.createHmac("sha256", this.salt).update(password).digest('hex');
        } catch(err) { 
            return ""
        }
    },
    authenticate: function (plainText) {
        return this.encryptedPassword(plainText) ===this.hashPassword;
    }
}

module.exports = mongoose.model("User", userSchema)
