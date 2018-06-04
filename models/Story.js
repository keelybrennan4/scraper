var mongoose = require("mongoose");

// reference to the Schema contructor 
var Schema = mongoose.Schema;

// create a new storySchema object 
var StorySchema = new Schema({
  //url must be unique and of type string 
  url: {
    type: String,
    unique: true,

    //left in from documentation but adjust as needed 
    title: String,
    author: String,
    body:   String,
    comments: [
      { 
        body: String,
        date: Date 
      }
    ]
  },
  //notes stores ObjectIds. The ref property links these Object Ids to teh Note model -- so we can populate the Story with associated Notes 
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// use mongoose model method to create model from story Schema 
var Story = mongoose.model("Story", StorySchema);

//export the Story model 
module.exports = Story;