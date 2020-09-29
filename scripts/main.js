// Переход от белого в черный

import { makeDraggable } from './dragging.js'

const message = document.getElementById('c');
const navPanel = document.getElementById('navpanel');
const worksPanel = document.getElementById('subpanel');

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

const aboutButton = document.getElementById('button1');
const worksButton = document.getElementById('button2');

var kick = document.getElementById('drum');
var snare = document.getElementById('snare');
var hiHat = document.getElementById('hihat');
var noise = document.getElementById('noise');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function draw() {  
  setTimeout(function() {
    noise.play()
  
    requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
      for (var i = 0; i < 1000; i++) { 
        var size = Math.random() * 5; 
        var posX = Math.random() * window.innerWidth;
        var posY = Math.random() * window.innerHeight;
          //drawing figure
          c.beginPath();
          c.fillStyle = 'black';
          c.fillRect(posX, posY, size, size);
      }
  }, 1000/12);
}

draw();


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


function clickButton(target1, target2) {
  
  target2.style.transition = 'all 2s linear';
  var count = 1;
  target1.onclick = function() {
    count++;
    if (count % 2 == 0) {
      kick.play();
      
      target2.style.display = 'block';
      target2.style.left = Math.random() * 1000;
      target2.style.top = Math.random() * 1000;
    }
    else {
      snare.play();
      
      target2.style.display = 'none';
    }
    console.log(count);
  }
}

clickButton(worksButton, worksPanel);
var image = document.getElementById('photo');
var image = document.getElementById('photo');


function addSymbol(target, symbol, image) {
  var previousText = target.textContent
  target.onmouseover = function(){
    hiHat.play();
    
    target.textContent = symbol + previousText;
    image.style.display = 'block';
  }
  target.onmouseout = function(){
    target.textContent = previousText;
    image.style.display = 'none';
  }
}

for (let i = 1; i < 4; i++) {
  addSymbol(document.getElementById(`button${i}`), '+', image);
}
for (let i = 1; i < 6; i++) {
  addSymbol(document.getElementById(`elm${i}`), '?', image);
}


var mouseChords = document.getElementById('mousecords');
var timePanel = document.getElementById('time');
var osPanel = document.getElementById('os');

window.addEventListener('mousemove', getPos);

function getPos(e){
    mouseChords.textContent = `[x: ${e.x}, y: ${e.y}]`;
    timePanel.textContent = new Date();
    osPanel.textContent = navigator.userAgent;
    
    arrow.textContent = '?';
    arrow.fontSize = '2vw';
    arrow.style.top = (e.y - 70) + 'px';
    arrow.style.left = (e.x - 40) + 'px';
    arrow.style.color = 'white';
    arrow.style.mixBlendMode = 'difference';
}



