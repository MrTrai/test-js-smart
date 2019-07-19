"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
while (true) {
    axios_1["default"].get("Foo").then(function (result) {
        console.log("Spamming");
    });
}
