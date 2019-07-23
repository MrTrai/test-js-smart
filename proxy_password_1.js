"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function getPW(s) {
    return s;
}
axios_1["default"].get("foo", {
    params: {
        password: getPW("1")
    }
});
