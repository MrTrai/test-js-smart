"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("Foo").then(function (result) {
    axios_1["default"].get("Bar").then(function (result) {
        axios_1["default"].get("Callback").then(function (result) {
            axios_1["default"].get("Hell").then(function (result) {
                axios_1["default"].get("url").then(function (result) {
                    axios_1["default"].get("lastone").then(function (result) {
                    });
                });
            });
        });
    });
});
