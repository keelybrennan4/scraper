$(document).ready(function(){

    $(".storyBox").on("click", "h4", function(){
        let myStory = $(this).parent()
        //console.log("clicked!");

        let story = {
            title: myStory.attr("dataTitle"),
            author: myStory.attr("dataAuthor"),
            url: myStory.attr("dataLink"),
            content: myStory.attr("dataContent"),
            img: myStory.attr("dataImg"),
        }
        console.log(story)
    })
})
