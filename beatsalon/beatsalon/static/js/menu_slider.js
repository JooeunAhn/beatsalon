          var menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
                showBottom = document.getElementById( 'showBottom' ),
                img_b = document.getElementById('img_b'),
                img_c = document.getElementById('img_c'),
                img_d = document.getElementById('img_d'),
                closeButton = document.getElementById('range_for_closing'),                body = document.body;



            showBottom.onclick = function() {

                classie.toggle( this, 'active' );
                classie.toggle( menuBottom, 'cbp-spmenu-open' );

                img_b.style.display="none";
                img_c.style.display="none";
                img_d.style.display="none";
                disableOther( 'showBottom' );
            };



            closeButton.onclick = function(){

               classie.toggle(this, 'active');
               classie.toggle(menuBottom, 'cbp-spmenu-open');

               img_b.style.display="block";
               img_c.style.display="block";
               img_d.style.display="block";
            };

// 도와주세요 개발자님들  ~..~
// $( "#close_tab" )
//   .mouseenter(function() {
//                 classie.toggle(this, 'active');
//                 classie.toggle( menuBottom, 'cbp-spmenu-open' );
//                 img_b.style.display="none";
//                 img_c.style.display="none";
//                 img_d.style.display="none";
//                 disableOther( 'showBottom' );
//   })
//   .mouseleave(function() {
//               classie.toggle(this, 'active');
//                classie.toggle(menuBottom, 'cbp-spmenu-open');
//                img_b.style.display="block";
//                img_c.style.display="block";
//                img_d.style.display="block";
//   });
