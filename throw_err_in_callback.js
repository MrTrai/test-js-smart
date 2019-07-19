"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("Foo").then(function (result) {
    throw new Error("This error is in callback!");
});
