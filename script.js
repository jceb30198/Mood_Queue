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
        music = response.data;

        
        music.forEach(element => {
            $.ajax({
                url: element.tracklist,
                method: "GET"
              }).then(function(response2) {
                console.log(response2)
                preview = response2.data;
                var contador = 1;
                preview.forEach(element2 => {
                    if(contador <= 5) {
                        arrayPreview.push({preview: element2.preview});
                        return;
                    } 
                    contador++;
                });
              });   
        });
      });

    };
    $('#happybtn').on('click', function(){
      alert("test");
    });


    $('#angrybtn').on('click', function(){
      alert("test");
    });

    $('#sadbtn').on('click', function(){
      alert("test");
    });
