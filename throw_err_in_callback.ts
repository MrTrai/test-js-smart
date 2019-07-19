import axios from "axios";

axios.get("Foo").then(result => {
    throw new Error("This error is in callback!")
});
