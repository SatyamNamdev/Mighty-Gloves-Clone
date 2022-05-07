(function($){

    $(document).ready(function(){
  
      function headerSticky() {
  
        if (window.scrollY > 100) {
  
          document.getElementById("masthead").classList.add('sticky');
  
        }else {
  
          document.getElementById("masthead").classList.remove('sticky');
  
        }
  
      }
  
      const play_button = document.querySelector('#play_button');
  
      play_button.addEventListener('click', function() {
  
          const player = this.parentElement.querySelector('iframe');
  
          player.attributes.src.value = player.dataset.src;
  
          this.parentElement.classList.add('videoplay');
  
      });
  
        $('.list-items').slick({
  
          slidesToShow: 7,
  
          slidesToScroll: 1,
  
          autoplay: true,
  
          autoplaySpeed: 0,
  
          speed: 8000,
  
          pauseOnHover: false,
  
          cssEase: 'linear',
  
          arrows: false,
  
          dots: false,
  
          infinite: true,
  
          responsive: [
  
            {
  
              breakpoint: 1024,
  
              settings: {
  
                slidesToShow: 6,
  
              }
  
            },
  
            {
  
              breakpoint: 768,
  
              settings: {
  
                slidesToShow: 4,
  
              }
  
            },
  
            {
  
              breakpoint: 600,
  
              settings: {
  
                slidesToShow: 3,
  
              }
  
            },
  
            {
  
              breakpoint: 480,
  
              settings: {
  
                slidesToShow: 3,
  
              }
  
            }
  
          ]
  
        });
  
  
        window.addEventListener('scroll', function(event){
  
          headerSticky();
          const roadmap = document.querySelector('#roadmap');
          const artist = document.querySelector('#artist');
          const about = document.querySelector('#about');
          activeHeader(about);
          activeHeader(roadmap);
          activeHeader(artist);
  
      })
  
      function activeHeader(target){
  
        if(this.scrollY >= (target.offsetTop - (innerHeight / 4 ))){
  
          const active_menu = document.querySelectorAll('.current-menu-item');
  
          if(active_menu.length > 0){
            active_menu.forEach(item => {
              item && item.classList.remove('current-menu-item');
            })
          }
              const target_menu = document.querySelector(`[href="#${target.id}"]`);
              target_menu && target_menu.parentElement.classList.add('current-menu-item');
  
        }else if(this.scrollY < target.offsetTop && target === document.querySelector('#about')) {
          const active_menu = document.querySelectorAll('.current-menu-item');
  
          if(active_menu.length > 0){
            active_menu.forEach(item => {
              item && item.classList.remove('current-menu-item');
            })
          }
          const target_menu = document.querySelector('.menu-item');
          target_menu && target_menu.classList.add('current-menu-item');
        }
  
      }
  
    })
  
  })(jQuery)