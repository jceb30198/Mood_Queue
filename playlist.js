
// $(document).ready(() => {
// _
//     $("#happybtn").on("click", function () {
//             for (var i = 1; i < 21; i++) {
//     _           var moodURL= "https://api.deezer.com/search?q=pop";
//                 var artist = [];
//                 var prev30Seconds = [];
//                 var albumImage = [];
              
//                 $.ajax({
//                   url: moodURL,
//                   method: "GET"
//                 }).then(function(response) {
//                   var randomdata= Math.floor((Math.random() * 25) + 1);  
//                   artist = response.data[randomdata].title;
//                   prev30Seconds = response.data[randomdata].preview;
//                   albumImage = response.data[randomdata].artist.picture;
//                   console.log(albumImage);
//                   console.log(artist);
//                   console.log(prev30Seconds);
                
//                   var prevBody = $("<div>").addClass("card-body p-3 previewBody");
//                   var audioControl= $("<audio controls>").attr("src", prev30Seconds);
//                   var artistToAppend = $("<div>").addClass("card-body p-3 previewBody").text(artist);
          
//                   var image = $("<img>").attr("src", albumImage);
              
//                   prevBody.append(artistToAppend,image,audioControl);
//                   card.append(prevBody);
//                   $("#playlist").append(card);
//             });
//         }
//     });
// });