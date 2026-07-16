const express = require("express");

const app = express();

 app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// GET route
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS !!");
});

 app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});