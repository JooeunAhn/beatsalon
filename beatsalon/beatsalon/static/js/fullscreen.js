  $(document).ready(function(){
      $('#defaultCanvas0').hide();
      $('#start_display').hide();
      console.log("fullscreen");
  });


document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    if (!$('#myModal').is(':visible')&!$('#myModal1').is(':visible')){
      isCanvasInFullscreen();
    }
  }
}, false);


function isCanvasInFullscreen(){

var canvas_full = document.getElementById("defaultCanvas0");

// go full-screen
if (canvas_full.requestFullscreen) {
  canvas_full.requestFullscreen();
} else if (canvas_full.webkitRequestFullscreen) {
  canvas_full.webkitRequestFullscreen();
} else if (canvas_full.mozRequestFullScreen) {
  canvas_full.mozRequestFullScreen();
} else if (canvas_full.msRequestFullscreen) {
  canvas_full.msRequestFullscreen();
}

}