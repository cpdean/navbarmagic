$(document).ready(function(){
  $.fn.extend({
    menuIn: function(){
              var root = $("#top");
              
              var y = root.offset().top;
              var xEntry = root.offset().left + root.width();
              var x = root.offset().left;

              this.show().width(root.width());
              this.offset({top:y,left:xEntry});
              this.animate({left:0});

            },
    menuOut: function(){
              var root = $("#top");
              var xEntry = root.offset().left + root.width();
              this.animate({left:xEntry});
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
