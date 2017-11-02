var Light = function(id, color) {
  var stopBlink;
  //get the target element to render the light into
  var elem = document.getElementById(id);
  // elem.classList.add('light-background');

  //append a div into the target element
  var lightElem = document.createElement('div');
  lightElem.classList.add('light');
  lightElem.classList.add(color);
  elem.appendChild(lightElem);


  this.on = function() {
    // add the switch the light on logic here
    lightElem.classList.add('on');
  };

  this.off = function() {
    // add the switch the light off logic here
    lightElem.classList.remove('on');
    clearInterval(stopBlink);
  };

  this.blink = function() {
    stopBlink = setInterval(function() {

      light.on();
      ready.on();
      stop.on();
      setTimeout(function() {
        light.off();
        ready.off();
        stop.off();
      }, 100);
    }, 300)
  };
}


var stop= new Light("light", 'red');
var ready = new Light("light", 'orange');
var light = new Light("light", 'green');


var counter = 0;

var seconds = document.querySelector('.counter');

setInterval(function() {
  seconds.innerHTML = counter++;

  if (counter >= 2 && counter < 8) {
    light.on();
    ready.off();
    stop.off();
  } else

  if (counter >= 8 && counter < 16) {
    stop.off();
    ready.on();
    light.off();
  } else

  if (counter >= 16 && counter < 24) {
    stop.on();
    ready.off();
    light.off();
  } else
  if (counter >= 24 && counter < 32) {
    stop.blink();
    ready.blink();
    stop.blink();

  } else if (counter === 32) {
    counter = 0;
    stop.off();
    ready.off();
    light.off();
  }
}, 600)
