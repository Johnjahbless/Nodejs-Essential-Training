const fs = require('fs');

let ipsum = fs.readFile("./readme.md", "utf8", (err, file) => {
    if (err) {
        throw err;
    } else {
        console.log(file)
    }
});

