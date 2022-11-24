const fs = require("fs")


let md = `
This is a new File
==================

ES6 Template Strings are Cool. They honor white space.

* Template Strings
* Node File Systems
* ReadLine CLIs
`;

fs.writeFile("javascript.md", md.trim(), (err) => {
    if (err) {
        throw err;
    }
        fs.appendFileSync("javascript.md", "\n\n ##### Nodejs resoursces")
   
})