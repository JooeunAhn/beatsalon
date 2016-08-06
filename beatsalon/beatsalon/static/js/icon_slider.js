$(document).ready(function(){
            $('.clip-circle:not(:first)').hide();
            $(".playlistarrow").click(function(){
            $('.clip-circle').next().animate({width: "toggle"});
});
});