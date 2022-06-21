const express = require("express");
const { json, urlencoded } = express;
const morgan = require("morgan"); // HTTP request logger middleware for node.js
const cors = require("cors"); // package providing a Connect/Express Middleware that can be used to enable CORS w/ various options
const cookieParser = require("cookie-parser");
const expressValidator = require('express-validator'); // express middleware that wraps validator.js validator and sanitize functions
require("dotenv").config(); // needed for environment variables to be served from .env file

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(expressValidator());

// routes
const userRoutes = require("./routes/user");
app.use("/", userRoutes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API. GQL will not be connected on this project.
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
