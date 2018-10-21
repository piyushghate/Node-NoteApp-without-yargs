console.log('Starting APP file');

// const yargs = require ('yargs');
const _ = require('lodash');

const notes = require('./notes.js');

console.log(process.argv);    // helps to get input from user!

var command = process.argv[2];
var title = process.argv[3];
var body = process.argv[4];

console.log('Command is: ', command);
console.log('Title is: ', title);
console.log('Body is : ', body);

if (command ==='add'){
  notes.addNote(title, body);
}else if (command ==='list') {
  notes.listNote();
}else if (command === 'remove') {
  notes.removeNote(title);
}else if (command === 'read') {
  notes.readNote(title);
}else {
  console.log('Invalid command!!');
  console.log('Please try again :)');
}
