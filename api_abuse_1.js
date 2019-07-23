"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function cb(msg, data) {
    if (msg === void 0) { msg = ""; }
    if (data === void 0) { data = null; }
}
axios_1["default"].get("foo")
    .then(function (result) {
    if (result) {
        cb(null, result);
    }
    else {
        cb("no-host-meta");
    }
})["catch"](function (err) {
});
