const fs  = require("fs");

let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "utf8");

let data;

stream.once("data", (chunk) =>{
    console.log("reading file");
    console.log("===========");
    console.log(chunk)
})

stream.on("data", chunk => {
    console.log(`chunk: ${chunk.length}`);
    data += chunk;
})

stream.on("end", () => {
    console.log(`finished reading: ${data.length}`)
})