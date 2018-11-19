// <!-- Giphy API key !!! DONT LOSE JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ --> JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ

$(document).ready(function () {

    // Variable arry for starting buttons 
    var actions = ["Dj-Khaled", "Marshawn Lynch", "NBA", "FPS", "Final Fantasy", "Hooping", "Drake", "French Bulldogs", "Meeseeks", "Winking", "Electricity", "Arizona", "Dunks", "Shaq",];

    function displayGifButtons() {
        $("#gifButtonsArea").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < actions.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-secondary", "padding-bottom: 2px")
            gifButton.attr("data-name", actions[i]);
            gifButton.text(actions[i]);
            $("#gifButtonsArea").append(gifButton);
            console.log('%c actions.length', "color: blue; font-wieght: bold;")
        }
    }

    // Function that displays all of the gifs
    function displayGifs() {
        var action = $(this).attr("data-name");

        // AJAX for Giphy API
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ";
        console.log('%c queryURL', "color: orange; font-wieght: bold;")
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log('%c response', 'color: red; font-weight: bold;');
            $("#gifsArea").empty();
            var results = response.data; //shows results of gifs
            if (results == "") {
                alert("well ain\'t that cute... but it\'s wrong.");
            }
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>"); //div for the gifs to go inside
                gifDiv.addClass("gifDiv");
                // pulling rating of gif
                var gifRating = $("<p>").html("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                // pulling gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); // still image
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                // pulling still image of gif
                // adding div of gifs to gifsArea div
                $("#gifsArea").prepend(gifDiv);
                console.log('%c gifDiv', 'color: green; font-weight: bold;');
            }







        });
    }



    displayGifButtons();
    $(document).on("click", ".action", displayGifs);


});


