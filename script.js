
function displayPreview(){

    var queryURL = "http://api.deezer.com/radio";
    var array = [];
    arrayPreview = [];

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        array = response.data;



        array.forEach(element => {
            $.ajax({
                url: element.tracklist,
                method: "GET"
              }).then(function(response2) {
                array2 = response2.data;
                var contdor= 1;
                array2.forEach(element2 => {
                    if(contador <= 5) {
                        arrayPreview.push({preview: element2.preview});
                        return;
                    }
                    
                    contador++;
                });
                
              });
              
        });

       
      });

      console.log(arrayPreview);
    }s
