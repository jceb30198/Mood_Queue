$(document).ready(function() {
    mood = localStorage.getItem("mood")
    console.log(mood); //test localstorage for var mood
    
    //create vars corresponding with mood to get appropriate genres of music 

    var playlist = "";
    var quote = "";
    if (mood == "sad"){
        playlist = "https://api.deezer.com/radio/39051/tracks";
        quote = '"Songs that make you cry are usually more sad and calmer, with slower tempos and more minor and diminished chords, to evoke a more sedative, or reflective, mood."';
    }
    else if (mood == "angry"){
        playlist = "https://api.deezer.com/radio/42222/tracks";
        quote = '"Rather than inciting people to anger or violence, research has found that loud and chaotic music such as metal and punk is ‘a healthy way of processing anger"';
    }
    else if (mood == "happy"){
        playlist = "https://api.deezer.com/radio/39041/tracks";
        quote = '"Turns out, we really like listening to songs that make us happy."';
    };

    // var playlist = determineMood(mood);
    console.log(playlist);
    console.log(quote);
    $("#quote").text(quote);

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
    songtitle = response.data[randomdata].title_short
    console.log(image);
    console.log(artist);
    console.log(prev30Seconds);
    
    var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
    var prevBody = $("<div>").addClass("card-body p-3 previewBody");
    var audioControl= $("<audio controls>").attr("src", prev30Seconds);
    var artistXtitle = $("<div>").addClass("card-body p-3 previewBody").text(artist + " x " + songtitle);
    var images = $("<img>").attr("src", image)
   prevBody.append(artistXtitle, images, audioControl);
   card.append(prevBody);
   $("#preview-section").append(card);
  

    
});



}});


