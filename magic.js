$(document).ready(function(){
  $.fn.extend({
    menuIn: function(){
              var obj = $(this);
              var root = $("#top");
              
              obj.show().width(root.width());
              var y = root.offset().top;
              var xEntry = root.offset().left + root.width();
              var x = root.offset().left;

              obj.offset({top:y,left:xEntry});
              obj.animate({left:0});

            },
    menuOut: function(){
              var obj = $(this);
              var root = $("#top");
              var xEntry = root.offset().left + root.width();
              obj.animate({left:xEntry});
            }
  });

  $("#oneLink").click(function(){
    $("#one").menuIn();

  });

  $("#twoLink").click(function(){
    $("#two").menuIn();
  });

  $(".back").click(function(){
    $(this).parent("ul").menuOut();
  });

  // set to fixed width
  var w = $("div#prototype").width();
  var h = $("div#prototype").height();
  $("div#prototype").width(w);
  $("div#prototype").height(h);

});
