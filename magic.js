
$(document).ready(function(){
    var sub_menu = false;
    var current = "";

    function switchTo(target){
        target.addClass("active");
        target.animate( {"right":"353px"});
    }

    function trash (target) {
        target.animate( {"right":"353px"});
    }

    function expand(target_div){
        current = target_div;
        trash($("#top"));
        switchTo($(target_div));
    }

    function backup(target_div){
        $("#top").animate( {"right":"0px"});
        $(current).animate( {"right":"0px"},{"complete": function(){$(current).removeClass("active")}});
    }


    $("#main .button").click(function() {
        backup();
    });

    $("#mind-top").css('background','red');
    $("#mind-top").click(function(){
        expand("#mind");
    });

    $("#body-top").css('background','red');
    $("#body-top").click(function(){
        expand("#body");
    });

    $("#spirit-top").css('background','red');
    $("#spirit-top").click(function(){
        expand("#spirit");
    });
});
