$(document).ready(function(){

  $("#oneLink").click(function(){
    $("#one").show();
  });

  $("#twoLink").click(function(){
    $("#two").show();
  });

  $(".back").click(function(){
    $(this).parent("ul").hide();
  });

});
