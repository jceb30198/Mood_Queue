    var artist = $("#search-term").val()
   
    $("#search-term").keypress(function(event) { 
	
      if (event.keyCode === 13) { 
        event.preventDefault();
        $("#run-search").click(); 
      } 
    });
    
    $("#run-search").on("click", function() {
    event.preventDefault();
      console.log(artist);
      
      $('#previewMusic').addClass('showClass');
      artist = $("#search-term").val();
      getData(artist);
      $("#search-term").val("");  
    });

    
    function getData(filter){ 
      
      var queryURL= "https://api.deezer.com/search?q=" + filter;
      var music = [];
      arrayPreview = [];

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);       
        music = response.data[0].preview;
        console.log(music)

      });

    };