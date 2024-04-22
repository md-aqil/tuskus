'use strict';

var app = {

  chars: [
    '.',

     'Tuskush',
     '.',

     'TUSKUSH',
     '.',
     '.'
   
    // Add more objects as needed
  ],

  init: function () {
    
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    let hero = document.getElementById("ac");
    hero.appendChild(app.container);
    
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];

    var duration = Math.floor(Math.random() * 30) + 1;
    
    var offset = Math.floor(Math.random() * (60 - duration * 2)) + 5;
    var size = 20 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);




var swiper = new Swiper('.swiper-loop', {
  loop: true,
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  speed: 9000,
  slidesPerView: 5,
  spaceBetween: 0,

  breakpoints: {
    1400: {
        slidesPerView: 6,
        spaceBetween: 0,
        centeredSlides: true,
     },
     320: {
        slidesPerView: "auto",
        spaceBetween: 0,
     },
   }
   
});

$(".swiper-loop").hover(function () {
  (this).swiper.autoplay.stop();
}, function () {
  (this).swiper.autoplay.start();
});

$('.faq-heading').click(function () {
  
  $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});