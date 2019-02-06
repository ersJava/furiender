$(document).ready(function(){

    
    
    $('#searchUsers').click(function(){
 
     var input = $('#searchInput').val().trim();
     if(!input){
         var errText = "Please type username or borough in the search bar";
         $('#errText').html(errText.fontcolor('Red'));
     }
         console.log(input);
         var reqUrl = ('users/'+ input);
         console.log(reqUrl);
     
         $.get("/users/:input", function(data){
             var createUserDisplay = $('#userFound');
             for (var i = 0; i< data.length; i++){
                 createUserDisplay.append(data[i].name);
                 
             }
             input.val("");
         }
             
         )
     
        
     
 
    })
 
 })