"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.send("id: " + req.query.id);
    console.log("GET / id=" + req.query.id);
});
app.listen(3000);
