$(document).ready(function(){

// function returns searched results and displays on the page
    function searchedResults(data){
        if(data.length !== 0){
            $('#userFound').empty();
            $('#userFound').show();

            for(var i = 0; i < data.length; i++){
                var newDiv = $('<div>');

      newDiv.append("<h2>Name : " + data[i].name + "</h2>");

      newDiv.append("<h2>Age : " + data[i].age + "</h2>");
      
      newDiv.append("<h2>Pet Name : " + data[i].petName + "</h2>");

      newDiv.append("<h2>Location : " + data[i].locationByBoroughs + "</h2>");

      newDiv.append("<h2>Breed : " + data[i].breed + "</h2>");

      newDiv.append("<h2>Age of Pet : " + data[i].petAge + "</h2>");

      newDiv.append("<h2>Weight of Pet : " + data[i].weight + "</h2>");

      newDiv.append("<h2>Pet's Energy Level : " + data[i].energy + "</h2>");

      newDiv.append("<h2>Fun Facts : " + data[i].funFacts + "</h2>");

      newDiv.append("<h2>Pet's Favorite Food : " + data[i].favoriteFood + "</h2>");

      newDiv.append("<h2>Pet's Favorite Toy : " + data[i].favoriteToy + "</h2>");

      newDiv.append("<h2>Pet's Favorite Park : " + data[i].favoritePark + "</h2>");

      newDiv.append("<h2>Member Since : " + data[i].createdAt + "</h2>");
    

      $("#userFound").append(newDiv);


        }

        } 
        
        else{
            var noUserFoundText = "No Matched Searches Found";
            $('#errText').html(noUserFoundText.fontcolor('Red')); 
        }

    }

    
    // Search based on name column taken from the input with id="searchInput"
    $('#searchUsers').click(function(event){
     event.preventDefault();
     var input = $('#searchInput').val().trim();
     if(!input){
         var errText = "Please type username or borough or breed in the search bar";
         $('#errText').html(errText.fontcolor('Red'));
     }
     
         $.get("/api/" + input, function(data){
            searchedResults(data);
         });
             
    });

    // Search based on checked criteria



    
 
})