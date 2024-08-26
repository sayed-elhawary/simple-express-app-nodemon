const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World as a running express app as a nodemon  ");
});

app.listen(4000, function(){
    console.log('Listening on port 4000');
});
