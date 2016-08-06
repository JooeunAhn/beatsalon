$(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider2').css({ width: slideWidth*5, height: slideHeight });

    $('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider2 ul li:last-child').prependTo('#slider2 ul'); //slider의 앞에 slider의 마지막 node가 붙는다 = for infinite loop

    function moveLeft() {
        $('#slider2 ul').animate({ //animate({css effect}, duration)
            left: + slideWidth //보여지던 li의  left가 +slideWidth 되어 오른쪽으로 넘어가고, 앞에 있던 애의  left값이 - slideWidth에서 0이 되어 비로소 보여지게 된다.
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        console.log("prev1");
    });

    $('a.control_next').click(function () {
        moveRight();
        console.log("next")
    });

});
