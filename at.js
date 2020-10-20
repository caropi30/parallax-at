
        let bg = document.getElementById('bg');
        let house = document.getElementById('house');
        let land2 = document.getElementById('land2');
        let finn = document.getElementById('finn');
        let logo = document.getElementById('logo');

        window.addEventListener('scroll', function(){
            var value = window.scrollY;

            bg.style.top = value * 0.5 + 'px';
            house.style.top = value * 0.40 + 'px';
            land2.style.top = value * 0.15 + 'px';
            finn.style.top = value * 1 + 'px';
            logo.style.left = -value * 0.7 + 'px';
        })  
