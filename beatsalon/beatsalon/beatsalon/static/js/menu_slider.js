 var menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
                showBottom = document.getElementById( 'showBottom' ),
                img_b = document.getElementById('img_b'),
                img_c = document.getElementById('img_c'),
                img_d = document.getElementById('img_d'),
                closeButton = document.getElementById('close_menu'),
                body = document.body;


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
               classie.toggle(menuBottom, 'cbp-spmenu-open')
               img_b.style.display="block";
               img_c.style.display="block";
               img_d.style.display="block";
            };