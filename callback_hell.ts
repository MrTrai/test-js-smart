import axios from "axios";

axios.get("Foo").then(function (result) {
    axios.get("Bar").then(function (result) {
        axios.get("Callback").then(function (result) {
            axios.get("Hell").then(function (result) {
                axios.get("url").then(function (result) {
                    axios.get("lastone").then(function (result) {
                    });
                });
            });
        });
    });
});
