console.log('Starting APP file');

// const yargs = require ('yargs');
const _ = require('lodash');

const notes = require('./notes.js');
// var argv = yargs;
//
// console.log(argv);

// console.log(_.isString(true));
// console.log(_.isString('Piyush'));
//
// // var res = notes.addNote(5,2);
// console.log('Addition: ', notes.addNote(5,-2));
//
// var filteredArray = _.uniq(['Piyush',2,3,1,1,1,1,1,1,1,'Piyush']);
// console.log(filteredArray);

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
