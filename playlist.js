$(document).ready(function() {
    mood = localStorage.getItem("mood")
    console.log(mood); //test localstorage for var mood
    
    //create vars corresponding with mood to get appropriate genres of music 

    var playlist = "";
    if (mood == "sad"){
        playlist = "http://api.deezer.com/radio/39051/tracks";
    }
    else if (mood == "angry"){
        playlist = "http://api.deezer.com/radio/42222/tracks";
    }
    else if (mood == "happy"){
        playlist = "http://api.deezer.com/radio/39041/tracks";
    };
    // var playlist = determineMood(mood);
    console.log(playlist);

    var numberOfSongs = 10

    for (var i= 1;i < numberOfSongs; i++){

    // Get Request - Deezer
    $.ajax({
        url: playlist,
        method: "GET"
    }).then(function(response){

    var randomdata= Math.floor((Math.random() * 25) + 1);
    console.log(response);
    artist = response.data[randomdata].artist.name;
    prev30Seconds = response.data[randomdata].preview;
    image = response.data[randomdata].artist.picture;
    console.log(image);
    console.log(artist);
    console.log(prev30Seconds);
    
    var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
    var prevBody = $("<div>").addClass("card-body p-3 previewBody");
    var audioControl= $("<audio controls>").attr("src", prev30Seconds);
    var artistToAppend = $("<div>").addClass("card-body p-3 previewBody").text(artist);
    var images = $("<img>").attr("src", image)
   prevBody.append(artistToAppend, images, audioControl);
   card.append(prevBody);
   $("#preview-section").append(card);
  

    
});



}});


