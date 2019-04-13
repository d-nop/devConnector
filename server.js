const express = require("express");
const moongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
moongoose.connect(db, { useNewUrlParser: true })
    .then(function () {
        console.log("Connected to MongoDB");    
    })
    .catch(function(err) {
        console.log(err);
    });

app.get("/", function(req, res) {
    res.send("Hello Worldddddd!");

});

// use Routes
app.use("./api/users", users);
app.use("./api/profile", profile);
app.use("./api/posts", posts);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});