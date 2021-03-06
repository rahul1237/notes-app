// file system!

// we have to require the module and convert it to the object!
const filesystem = require('fs')

// creatting a new file and adding data to it!
filesystem.writeFileSync('notes.txt','my name is rahul mahajan')

// appending the data to the existing file!
filesystem.appendFileSync('notes.txt','. again here to lear node from scratch')

const name = 'rahul'

// here we are importing utils.js file into our main file APP.JS
const add = require('./utils')

console.log(name)

// by exporting objects from the utils.js file we are using them in our main file!
console.log(add(2,3));

const note = require('./notes')

msg = note()

console.log(msg);


// MAIN PROJECT!