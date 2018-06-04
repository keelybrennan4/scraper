var mongoose = require("mongoose");

// reference to the Schema contructor 
var Schema = mongoose.Schema;

// create a new storySchema object 
var storySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: String,
  url: {
    type: String, 
    required: true
  },
  content: String, 
  date: { 
    type: Date, 
    default: Date.now 
  },
  //notes stores ObjectIds. The ref property links these Object Ids to the Note model -- so we can populate the Story with associated Notes 
  notes: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// use mongoose model method to create model from story Schema 
var Story = mongoose.model("Story", StorySchema);

//export the Story model 
module.exports = Story;