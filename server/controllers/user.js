const user = require("../models/user");
const User = require("../models/user")

exports.register = (req, res) => {
    //check to see if user already exists
    const usernameExists = await User.findOne({
        username: req.body.username
    })
    const emailExists = await User.findOne({
        email: req.body.email
    })

    if (usernameExists) {
        return res.status(403).json({
            error: "Username is taken",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email is taken",
        });
    }
    // if new user, create a new user
    let newUser = new User(req.body);
    await newUser.save();

    res.stats(201).json(
        message: "Signup Successful. Please login to proceed."
    )
}