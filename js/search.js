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
                  
                  for(i=0; i<1/*response.items.length*/; i++){

                      results.style.display = "block";
                      // get the title 
                    title = $('<h5 style="font-size:16px;text-align:center; margin-top:15px">'+response.items[i].volumeInfo.title + '</h5>');
                    //get the authors
                    author = $('<h5 style="font-size:14px;text-align:center">'+response.items[i].volumeInfo.authors + '</h5>');
                     img = $('<img style="width:70%; height: 70%; margin:10px 30px; border-radius:20px"/>'+response.items[i].volumeInfo);
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