var express = require("express");
var router = express.Router();

router.get("/posts", function(req, res){
    console.log(req.query);
    res.send("api is running")
})

module.exports = router;