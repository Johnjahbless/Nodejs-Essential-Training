const fs = require("fs");


if (fs.existsSync("your-files-here")){
    console.log("Dir exits")
}else{
    fs.mkdir("your-files-here", (err) => {
        if (err) {
            throw err;
        }
        console.log("created")
    })
}

// fs.rmdir("your-files-here", (err) => {
// if (err) {
//     throw err;
// } else {
//     console.log("dir removed")
// }
// })


fs.readdirSync("folder").forEach(file => {
    fs.renameSync(`./folder/${file}`, `./lib/${file}`)
})

console.log("All files removed");

fs.rmdirSync("folder");

console.log("folder removed")


