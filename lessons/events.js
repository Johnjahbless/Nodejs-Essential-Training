const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
})

emitter.emit("customEvent", "Hello", "john")
emitter.emit("customEvent", "Hello", "james")
emitter.emit("customEvent", "Hello", "peter")

process.stdin.on("data", data => {
    const input = data.toString().trim();

    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye", "process");
        process.exit()
    } else {
        emitter.emit("customEvent", data.toString().trim(), "terminal")
    }
})