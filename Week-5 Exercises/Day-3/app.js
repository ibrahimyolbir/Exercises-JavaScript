giveMePromise()
    .then(function (msg) {
        console.log(msg); // -> "Hello from promise"
    })

function giveMePromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hello from promise");
        }, 1000)
    })
}

