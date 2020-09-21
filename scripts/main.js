import { makeDraggable } from './dragging.js'

const message = document.getElementById('c');
const navPanel = document.getElementById('navpanel');
const worksPanel = document.getElementById('subpanel');

const aboutButton = document.getElementById('button1');
const worksButton = document.getElementById('button2');

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var min = 200;
var randomWidth = randomInterval(min, window.innerWidth);
var randomHeight = randomInterval(min, window.innerHeight);


window.onload = function(){
    message.style.transition = 'all 3s ease';
    message.style.top = randomHeight/1.5 + 'px';
    message.style.left = randomWidth - min + 'px';
    message.style.opacity = 1;
    
    function activateDraggable(){
      makeDraggable(worksPanel);
      makeDraggable(message);
      makeDraggable(navPanel);
    }

    setTimeout(activateDraggable, 3000)
}

var elm1 = document.getElementById('elm1');
var elm2 = document.getElementById('elm2');
var elm3 = document.getElementById('elm3');
var elm4 = document.getElementById('elm4');

function changeOpacity() {
  elm1.style.opacity = 1;
  elm2.style.opacity = 1;
  elm3.style.opacity = 1;
  elm4.style.opacity = 1;
}

function makeOpacity() {
  elm1.style.opacity = 0;
  elm2.style.opacity = 0;
  elm3.style.opacity = 0;
  elm4.style.opacity = 0;
}


elm1.style.opacity = 0;
elm1.style.transition = 'all 1s ease';

elm2.style.opacity = 0;
elm2.style.transition = 'all 2s ease';

elm3.style.opacity = 0;
elm3.style.transition = 'all 3s ease';

elm4.style.opacity = 0;
elm4.style.transition = 'all 4s ease';





function clickButton(target1, target2) {
  target2.style.transition = 'all 2s linear';
  var count = 1;
  target1.onclick = function() {
    count++;
    if (count % 2 == 0) {
      target2.style.opacity = 1;
      setTimeout(changeOpacity, 500);
    }
    else {
      target2.style.opacity = 0;
      setTimeout(makeOpacity, 500);
    }
    console.log(count);
  }
}

clickButton(worksButton, worksPanel);


function addSymbol(target, symbol, image) {
  var previousText = target.textContent
  target.onmouseover = function(){
    target.textContent = symbol + previousText;
    document.getElementById('photo').style.opacity = 1;
  }
  target.onmouseout = function(){
    document.getElementById('photo').style.opacity = 0;
    target.textContent = previousText;
  }
}

for (let i = 1; i < 4; i++) {
  addSymbol(document.getElementById(`button${i}`), '+')
}

for (let i = 1; i < 5; i++) {
  addSymbol(document.getElementById(`elm${i}`), '?')
}
