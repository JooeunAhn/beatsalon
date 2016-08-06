$(document).ready(function(){
var start_display = '<div id = "start_display">'+'<div>main_img</div> <p>start</p></div>';
console.log("window loaded")
$('body').append(start_display);
$('body').on('click', '#start_display', function(){
$('#start_display').hide();

});
});