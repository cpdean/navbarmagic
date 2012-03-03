$(document).ready(function(){

  $("#oneLink").click(function(){
    $("#one").show();

    var y = $("#top").offset().top;
    var xEntry = $("#top").offset().left + $("#top").width();
    var x = $("#top").offset().left;

    $("#one").offset({top:y,left:xEntry});
    $("#one").animate({left:0});
  });

  $("#twoLink").click(function(){
    $("#two").show();
  });

  $(".back").click(function(){
    var xEntry = $("#top").offset().left + $("#top").width();
    $(this).parent("ul").animate({left:xEntry});
  });

  // set to fixed width
  var w = $("div#prototype").width();
  var h = $("div#prototype").height();
  $("div#prototype").width(w);
  $("div#prototype").height(h);

});
