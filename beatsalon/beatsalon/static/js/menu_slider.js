 var menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
                showBottom = document.getElementById( 'showBottom' ),
                img_b = document.getElementById('img_b'),
                closeButton = document.getElementById('close_menu'),
                body = document.body;


            showBottom.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( menuBottom, 'cbp-spmenu-open' );
                img_b.style.display="none";
                disableOther( 'showBottom' );
            };

            closeButton.onclick = function(){
               classie.toggle(this, 'active');
               classie.toggle(menuBottom, 'cbp-spmenu-open')
               img_b.style.display="block";
            };
