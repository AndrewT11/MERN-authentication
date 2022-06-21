const express = require("express");
const router = express.Router();

// import controllers 
const { register } = require("../controllers/user");

//import middlewares

//API route
router.post("/register", register)

module.exports = router;