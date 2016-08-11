  $(document).ready(function(){
      $('#defaultCanvas0').hide();
      $('#start_display').hide();
<<<<<<< HEAD
      console.log("fullscreen");
  });
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    if(!$('#myModal').is(':visible')&!$('#myModal1').is(':visible')){
      toggleFullScreen();
    }
=======
  });
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    if (!$('#myModal').is(':visible')&!$('#myModal1').is(':visible')){
    toggleFullScreen();
  }
>>>>>>> dfa1eb3696db2d2f87c558ba0ee167a49ef208b6
  }
}, false);
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}