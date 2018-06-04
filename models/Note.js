var mongoose = require("mongoose");

// reference to the Schema contructor 
var Schema = mongoose.Schema;

// create a new NoteSchema object 
var NoteSchema = new Schema({
    //url must be unique and of type string 
    url: String,
    body: String
});

var Note = mongoose.model("note, NoteSchema");

module.exports = Note;