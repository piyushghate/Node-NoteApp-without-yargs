console.log('Note App starting');

const fs = require('fs');

var fetchNote = () => {
  try{
    // reading the data.json file
    var readString = fs.readFileSync('data.json');
    return JSON.parse(readString);
  }catch{
    return [];
  }
}

var addNote = (title, body) => {

  note = {
    title: title,
    body: body,
  };

  var objstring = fetchNote();

  for(var i=0;i<objstring.length;i++){
    var x = true;
    if (objstring[i].title === title){
      console.log(`Title: ${objstring[i].title} with Body: ${objstring[i].body} already exists!`);
      x = false;
      break;
    }
  }
  if (x){
    objstring.push(note);
    fs.writeFileSync('data.json', JSON.stringify(objstring));
    console.log(`Note with title: ${title} and body: ${body} added!`);
  }
}

var listNote = () => {
  var objstring = fetchNote();
  for(var i=0;i<objstring.length;i++){
    console.log(`Title: ${objstring[i].title}, Body: ${objstring[i].body}`);
  }
}

var removeNote = (title) => {
  if (title === undefined){
    console.log('Please mention title!');
  }else {
      objstring = fetchNote();

      for(var i=0;i<objstring.length;i++){
        var x = true;
        if (objstring[i].title === title){
          objstring.splice(i,1);
          console.log(objstring);
          fs.writeFileSync('data.json', JSON.stringify(objstring));
          console.log(`Note with title: ${title} removed!!`);
          x = false;
          break;
        }
      }
      if (x){
        console.log(`Title: ${title} not found`);
      }

  }
}

var readNote = (title) => {
  if (title === undefined) {
    console.log('Please mention title!');
  }else {
    var objstring = fetchNote();
    for(var i=0;i<objstring.length;i++){
      var x = true;
      if (objstring[i].title === title){
        console.log(`Title: ${objstring[i].title} with Body: ${objstring[i].body}`);
        x = false;
        break;
      }
    }
    if(x){
    console.log(`Title: ${title} not found!!`);
    }
  }
}



module.exports = {
  addNote: addNote,
  listNote: listNote,
  removeNote: removeNote,
  readNote: readNote,
};
