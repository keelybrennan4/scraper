// just your basic server 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//require the router 
var htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")

const port = process.env.PORT || 3000;

//to serve files 
app.use(express.static("public"));

// to use the htmlRoutes we're requiring above 
app.use(htmlRoutes);

//route = /api/posts because it's concatinating the route on apiRoutes 
app.use("/api", apiRoutes);

//add hbs below routes 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(port, function(){
    console.log("app is running");
});