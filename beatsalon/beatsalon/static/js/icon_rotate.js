var rotation = function (){
   $(".clip-circle:first").rotate({
      angle:0,
      animateTo:360,
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
};
var stop = function (){
   $(".clip-circle:first").stopRotate();
};