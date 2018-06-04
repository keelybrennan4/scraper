// for router, we need to require express again 
var express = require("express");
//router will serve as a container as all routes to use later in the server 
var router = express.Router();
// require cheerio on html routes for scraping 
var cheerio = require("cheerio");
//for server side ajax request 
var request = require("request");

    let url = "https://techcrunch.com/";
    //since we have two instances of express -- one in server and one in htmlRoutes we want to send this route back to our server.js file where the server is listening
    router.get("/scrape", function(req, res){
        //store all stories in an empty array 
        var allStories = [];
        //add request to site we want to scrape 
        request(url, function(err, respense, body){
            if (err) console.log(err);

        let $ = cheerio.load(body)
        // select the parent div 
        let stories = $(".post-block");
        //jquery loop to scrap html
        stories.each(function(i, story){
            let oneStory = {
                title: $(story).children(".post-block__header").children(".post-block__title").text().trim(),
                author: $(story).children(".post-block__header").children(".post-block__meta").children(".river-byline").children(".river-byline__authors").text().replace(/\t/g,"").replace(/\n/g, " ").trim(), //when there are multiple authors we need to remove the extra text returned 
                url: $(story).children(".post-block__header").children(".post-block__title").children(".post-block__title__link").attr("href"),
                content: $(story).children(".post-block__content").text().trim(),
                img: $(story).children(".post-block__footer").children().children().children("img").attr("src")
            }
            allStories.push(oneStory);
        })
        //render hbs object 
        res.render("index", {stories : allStories});
    });
});

// export to use in server.js 
module.exports = router;