const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to DB"))
    .catch((err)=> {
        console.log("Database connection error", err)
    });

module.exports = mongoose.connection;
