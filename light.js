var Light = function(id, color) {
 var clear;
    //get the target element to render the light into
    var elem = document.getElementById(id);
    // elem.classList.add('light-background');

    //append a div into the target element
    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);


    this.on = function(){
           // add the switch the light on logic here
           lightElem.classList.add('on');
       };

       this.off = function(){
          // add the switch the light off logic here
            lightElem.classList.remove('on');
            clearInterval(clear);
      };

this.blink = function(){
  clear = setInterval(function(){

    greenLight.on();
    setTimeout(function(){
      greenLight.off();
    } ,3000);

    orangeLight.on();
    setTimeout(function(){
      orangeLight.off();
    } ,3000);

    redLight.on();
    setTimeout(function(){
      redLight.off();
    } ,3000);
  },2000)
}
}


var redLight = new Light("light",'red');
var orangeLight = new Light("light",'orange');
var greenLight = new Light("light",'green');


var counter = 0

var seconds = document.querySelector('.counter');

setInterval(function(){
  seconds.innerHTML = counter++;

if(counter >=2 && counter < 10){
  greenLight.on();
  orangeLight.off();
  redLight.off();
} else

if (counter >= 10 && counter < 20) {
  redLight.off();
  orangeLight.on();
  greenLight.off();
} else

if (counter >=20 && counter < 30) {
  redLight.on();
  orangeLight.off();
  greenLight.off();
} else
if (counter >=30 && counter < 40) {
  redLight.blink();
  orangeLight.blink();
  redLight.blink();

}else if (counter == 40) {
  counter = 0;
  redLight.off();
  orangeLight.off();
  greenLight.off();
}
},600);
