import axios from "axios";

while (true) {
    axios.get("Foo").then(result => {
        console.log("Spamming")
    });
}