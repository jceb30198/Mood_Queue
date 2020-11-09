    var queryURL = "http://api.deezer.com/radio";
    var music = [];
    arrayPreview = [];

    function getData(queryURL,music){  
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
