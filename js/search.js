$(document).ready(function(){

    $("#myform").click(
        function(){
             var search = $("#books").val();
             var results =document.getElementById("results");
             if (search ==''){
                 alert("enter something");
                 results.style.display = "none";
                
             }else{
                 var url = '';
                 var img = '';
                 var title = '';
                 var author = '';

                  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){
                  
                  for(i=0; i<10/*response.items.length*/; i++){

                    results.style.display = "block";
                      // get the title 
                    title = $('<h4 style="padding: 10px">'+response.items[i].volumeInfo.title + '</h4>');
                    //get the authors
                    author = $('<h4 style="padding: 5px">'+response.items[i].volumeInfo.authors + '</h4>');
                     img = $('<img style="width:200px; height: 60%; border-radius: 20px;"/>'+response.items[i].volumeInfo);
                     url = response.items[i].volumeInfo.imageLinks.thumbnail;
                     img.attr('src', url); //attach image url
                     
                     title.appendTo("#results");
                     author.appendTo("#results");
                     img.appendTo("#results");

                     

                  }

                  } );
             }

            
        }
    )

    return false;

})