// <!-- Giphy API key !!! DONT LOSE JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ -->

$(document).ready(function () {

    // Variable arry for starting buttons 
    var actions = ["Dj-Khaled", "Marshawn Lynch", "NBA", "FPS", "Final Fantasy", "the Oscars", "Drake", "French Bulldogs", "Meeseeks", "Winking", "Electricity", "Arizona", "Hockey"];

    function displayGifButtons(){
        $("#gifButtonsView").empty(); // erasing anything in this div id so that it doesnt duplicate the results
        for (var i = 0; i < actions.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", actions[i]);
            gifButton.text(actions[i]);
            $("#gifButtonsView").append(gifButton);
            console.log('%c actions', "color: blue; font-wieght: bold;")
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

        });
    }

    

    displayGifButtons();
    $(document).on("click", ".action", displayGifs);


});
