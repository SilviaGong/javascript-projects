function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);


//Method2:
setTimeout(function () {
    console.log("The future is now!");
}, 5000);
