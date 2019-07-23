import axios from "axios";

function cb(msg = "", data = null) {
}

axios.get("foo")
    .then((result) => {
        if (result) {
            cb(null, result);
        } else {
            cb("no-host-meta");
        }
    })
    .catch((err) => {
    });