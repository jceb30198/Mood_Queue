var moodsQueue: ("sad", "happy", "Angry");

var sad = ["Sad Songs", "Indie", "Latin Music", "Grime ", ];
var happy = ["Hits", "Pop", "Cosy Fireplace ","Pop"  ];
var angry = ["The '80s", "Hair Fashion Night 2017","Hip Hop","Rap US" ]

function displayPreview(){

    var queryURL:"http://api.deezer.com/radio";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        
}