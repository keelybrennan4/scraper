var express = require("express");
var router = express.Router();
var Story = require("../models/Story");

router.get('/', function(req, res){
    res.send("yay");
});

//get all stories from db and display on web page in json format
router.get('/stories', function(req, res){
    Story.find({}), function(error, data){
        if (error){
            console.log(error);
        }else{
            res.json(data);
        }
    }
});
    
//get story by id
router.get('/stories/:id', function(req, res){
    Story.findOne({
        _id:req.params.id
    })
    .populate("comments")
    .exec(function(error, data){
        if (error) {
            console.log(error);
        }else{
            res.json(data);
        }
    });
});

//save story 
router.post('stories/save/:id', function (req, res){
    Story.findOneAndUpdate({
        _id:req.params.id
    }, {
        saved: true
    })
    .exec(function(error, data){
        if (error) {
            console.log(error);
        }else{
            res.json(data);
        }
    });
});

//delete story 
router.post('stories/delete/:id', function (req,res){
    console.log("deleted");

})





module.exports = router;