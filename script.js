var app = {

  chars: [
    { content: 'Tuskus', type: 'text', probability: 5 }, // Adjust probability as needed
    { content: '.', type: 'text', probability: 5 }, // Adjust probability as needed
    { content: './img/gc2.png', type: 'image', size: '50px', probability: 1 }, // Adjust probability as needed
    { content: './img/gc3.png', type: 'image', size: '50px', probability: 1 }, // Adjust probability as needed
    { content: './img/gold-coin1.png', type: 'image', size: '50px', probability: 1 }, // Adjust probability as needed
    // Add more objects as needed
  ],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    let hero = document.getElementById("hero");
    hero.appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add: function () {
    var random = Math.random();
    var totalTextProbability = 0;
    var totalImageProbability = 0;

    // Calculate total probabilities for text and image items
    app.chars.forEach(function(item) {
      if (item.type === 'text') {
        totalTextProbability += item.probability || 1; // Default probability is 1 if not specified
      } else if (item.type === 'image') {
        totalImageProbability += item.probability || 1; // Default probability is 1 if not specified
      }
    });

    var item;

    // Randomly select between text and image based on their probabilities
    if (random < totalTextProbability / (totalTextProbability + totalImageProbability)) {
      // Select a text item
      var textRandom = Math.random() * totalTextProbability;
      var cumulativeProbability = 0;
      for (var i = 0; i < app.chars.length; i++) {
        if (app.chars[i].type === 'text') {
          cumulativeProbability += app.chars[i].probability || 1;
          if (textRandom < cumulativeProbability) {
            item = app.chars[i];
            break;
          }
        }
      }
    } else {
      // Select an image item
      var imageRandom = Math.random() * totalImageProbability;
      var cumulativeProbability = 0;
      for (var i = 0; i < app.chars.length; i++) {
        if (app.chars[i].type === 'image') {
          cumulativeProbability += app.chars[i].probability || 1;
          if (imageRandom < cumulativeProbability) {
            item = app.chars[i];
            break;
          }
        }
      }
    }

    var element;

    if (item.type === 'text') {
      element = document.createElement('span');
      element.innerHTML = item.content;
    } else if (item.type === 'image') {
      element = document.createElement('img');
      element.src = item.content;
      element.alt = 'Image';
      element.style.width = item.size; // Set the size of the image
    }

    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var duration = Math.floor(Math.random() * 30) + 1;
    var offset = Math.floor(Math.random() * (50 - duration * 10)) + 80;
    var size = 20 + (15 - duration);

    // Adjust the size of the image using the width property
    element.style.cssText = 'position: absolute; top: 0; right:' + offset + 'vw; width:' + size + 'px; animation-duration:' + duration + 's';
    element.style.animationName = 'move';

    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
