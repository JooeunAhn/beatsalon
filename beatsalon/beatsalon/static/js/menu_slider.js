          var menuBottom = document.getElementById( 'cbp-spmenu-s4' );
                showBottom = document.getElementById( 'showBottom' );
                img_b = document.getElementById('img_b');
                img_c = document.getElementById('img_c');
                img_d = document.getElementById('cat');

                img_e = document.getElementById('myBtn1');
                closeButton = document.getElementById('range_for_closing'),
                body = document.body;
                var count=true;

            showBottom.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( menuBottom, 'cbp-spmenu-open' );

                img_b.style.display="none";
                img_c.style.display="none";
                img_d.style.display="none";
                img_e.style.display="none";
                count=false;
            };

            closeButton.onclick = function(){
               classie.toggle(this, 'active');
               classie.toggle(menuBottom, 'cbp-spmenu-open');

               if(count==true){
                  img_b.style.display="none";
                   img_c.style.display="none";
                   img_d.style.display="none";
                   img_e.style.display="none";
                   count=false;
               }
               else if (count==false){
                  img_b.style.display="block";
                   img_c.style.display="block";
                   img_d.style.display="block";
                   img_e.style.display="block";
                   count=true;
               }
            };



