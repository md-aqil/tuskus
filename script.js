'use strict';

var app = {

  chars: ['Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus','Tuskus',],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    let hero =  document.getElementById("hero");
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
    var offset = Math.floor(Math.random() * (50 - duration * 10)) +70;
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

