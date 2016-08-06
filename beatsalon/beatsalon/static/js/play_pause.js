$( "div.play_button" ).mouseover(function() {
  $(".play").show();
});
$( "div.play_button" ).mouseout(function() {
    $(".play").hide();
  });

$('img.play').click(function() {

    if (musicPlaying){
      song.pause();
      musicPlaying=false;
      stop();
      $('.play').attr('src', '/static/blog/V.png');
    }

    else{
      song.play();
      musicPlaying=true;
      rotation();
      $('.play').attr('src', "/static/blog/X.png");
    }
});
