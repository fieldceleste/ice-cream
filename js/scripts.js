$(document).ready(function(){
  var counter = 0;
  var flavors = ["vanilla", "chocolate", "strawberry", "pistachio"];

  $(".iceCreamForm").click(function() {
    if(counter <= flavors.length - 1){
      $(".output").append('<li>' + flavors[counter] + '</li>');
      counter = counter + 1;
    }
    //<!---If we want just the list-->

  // $(".iceCreamForm").submit(function(event) {
    // event.preventDefault
    // flavors.forEach(function(flavor){
    // $(".output").append('<li>' + flavors + '</li>');
    // });
  
  });
})