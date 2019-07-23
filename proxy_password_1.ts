import axios from "axios";

function getPW(s: string) {
    return s;
}

axios.get("foo", {
    params: {
        password: getPW("1")
    }
});
