
function displayPreview(){

    var queryURL = "http://api.deezer.com/radio";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var playlist = $("<div class='preview'>");


    $('#forecast').empty();

    var results = response.Preview;

    for (var i = 0; i < results.length; i++) {

      var day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
      var hour = results[i].dt_txt.split('-')[2].split(' ')[1];

   
}