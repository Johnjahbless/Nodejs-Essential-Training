const fs = require("fs");


//fs.renameSync("dir.js", "dirs.js");

// fs.rename("notes.md", "./lib/notes.md", (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("file rename")
//     }
// })


fs.unlinkSync("./lib/notes.md")
