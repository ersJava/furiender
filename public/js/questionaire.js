$("#submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newFriend object
    var newFriend = {
      name: $("#name").val().trim(),
      age: $("#age").val().trim(),
      petName: $("#petName").val().trim(),
      location: $("#location").val().trim(),
      breed: $("#breed").val().trim(),
      petAge: $("#petAge").val().trim(),
      weight: $("#weight").val().trim(),
      energy: $("#energyLevel").val().trim(),
      funFacts: $("#funFacts").val().trim(),
      favoriteFood: $("#favoriteFood").val().trim(),
      favoriteToy: $("#favoriteToy").val().trim(),
      favoritePark: $("#favoritePark").val().trim()
    };

    console.log("new data " + newFriend);
    if(!newFriend){
      console.log("fill up");
    }
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/newFriend", newFriend)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
       $("#name").val(""),
       $("#age").val(""),
       $("#petName").val(""),
       $("#location").val(""),
       $("#breed").val(""),
       $("#petAge").val(""),
       $("#weight").val(""),
       $("#energyLevel").val(""),
       $("#funFacts").val(""),
       $("#favoriteFood").val(""),
       $("#favoriteToy").val(""),
       $("#favoritePark").val("")




      

      



  });
  