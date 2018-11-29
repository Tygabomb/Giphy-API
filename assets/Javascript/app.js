// <!-- Giphy API key !!! DONT LOSE JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ --> JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ

$(document).ready(function () {

    // Variable arry for starting buttons 
    var myGifs = ["Dj-Khaled", "Marshawn Lynch", "NBA", "FPS", "Final Fantasy", "Ballin", "Drake", "French Bulldogs", "Meeseeks", "Winking", "Electricity", "Arizona", "Dunks", "Shaq",];

    function displayGifButtons() {
        $("#gifButtonsArea").empty(); 
        for (var i = 0; i < myGifs.length; i++) {
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-secondary", "padding-bottom: 2px")
            gifButton.attr("data-name", myGifs[i]);
            gifButton.text(myGifs[i]);
            $("#gifButtonsArea").append(gifButton);
            console.log(`%c ${myGifs.length}, "color: blue; font-wieght: bold;`)
        }
    }

    function addNewButton(){
        $("#addGif").on("click", function(){
        var action = $("#Giff-input").val().trim();
        if (action == ""){
            // no blank spots
            return false; 
        }
        myGifs.push(action);
    
        displayGifButtons();
        return false;
        });
    }
    
    function removeLastButton(){
        $("remove").on("click", function(){
        myGifs.pop(action);
        displayGifButtons();
        return false;    
        });
    }

    // Function that displays all of the gifs
    function displayGifs() {
        var action = $(this).attr("data-name");

        // AJAX for Giphy API
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=JzqMXIEKUptS1dOLIQWCNf4Fs51dUmoJ";
        console.log(`%c ${queryURL} "color: orange; font-wieght: bold;`);
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log('%c response', 'color: red; font-weight: bold;');
            console.log(response);
            $("#gifsArea").empty();

            //shows results of gifs
            var results = response.data;
            if (results == "") {
                alert("well ain\'t that cute... but it\'s wrong.");
            }
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>"); 
                gifDiv.addClass("gifDiv");

                // pulling rating of gif
                var gifRating = $("<p>").html("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                console.log(results[i]);


                // this section sent me to the main giphy site but still couldn't download 
                // pulling gif
                gifA = $("<a download>")
                //gifA.attr('download', '')
                // gifA.attr('href', results[i].images.fixed_height_small.url)
                var gifImage = $("<img>");

    
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url); 
                gifImage.attr("data-state", "still");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                gifImage.addClass("image");
                gifA.append(gifImage);
                gifDiv.append(gifA);
                

                
                // adding div of gifs to gifsArea div
                $("#gifsArea").prepend(gifDiv);
                console.log(`%c ${gifDiv}, 'color: green; font-weight: bold;`);
                console.log(gifDiv);
            }
            // function downloadGifBtn(){
            //     $("#download").on("click", function(){
                
                    
            //     });
            // }        
    

        });
    }
    // function to save the giff externally 

    // $("#download").on("click", function(){
    // document.onclick = function (e) {
    //     e = e || window.event;
    //     var element = e.target || e.srcElement;
    //     if (element.innerHTML == "image") {
    //         //someFunction(element.href);
    //         var name = element.nameProp;
    //         var address = element.href;
    //         saveImageAs1(element.nameProp, element.href);
    //         return false; // Prevent default action and stop event propagation
    //     }
    //     else
    //         return true;
    // };
    // });

    function saveImageAs1(name, adress) {
        var SaveGiff = $("#download").val().trim();

        if (confirm('you wanna save this image?')) {
            window.win = open(adress);
            //response.redirect("~/testpage.html");
            setTimeout('win.document.execCommand("SaveAs")', 100);
            setTimeout('win.close()', 500);
        }
    };


    // allways remember to call out functions 
    displayGifButtons();
    addNewButton();
    removeLastButton();

    $(document).on("click", ".action", displayGifs);
    $(document).on("click", ".image", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }



});

});

