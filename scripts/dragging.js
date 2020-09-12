function makeDraggable(target) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  target.onmousedown = mouseDown;

  function mouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    target.style.transition = 'filter 0.5s';

    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmouseup = closeDragTarget;
    document.onmousemove = dragTarget;
  }

  function dragTarget(e) {    
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    target.style.top = (target.offsetTop - pos2) + "px";
    target.style.left = (target.offsetLeft - pos1) + "px";
  }

  function closeDragTarget() {
    document.onmouseup = null;
    document.onmousemove = null;
  }    
}



var min = 200;

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomWidth = randomInterval(min, window.innerWidth);
var randomHeight = randomInterval(min, window.innerHeight);

const ff = document.getElementById('c');
const bb = document.getElementById('panel');


window.onload = function(){
    ff.style.transition = 'all 3s ease';
    ff.style.top = randomHeight/1.5 + 'px';
    ff.style.left = randomWidth - min + 'px';
    ff.style.opacity = 1;
    
    function activateDraggable(){
    makeDraggable(ff);
    makeDraggable(bb);
    }

    setTimeout(activateDraggable, 3000)
}
console.log(ff.clientHeight, ff.clientWidth)

function addCross(number) {  
  button = document.getElementById(`button${number}`);
  text = button.textContent;
  button.textContent = '+' + text;
}

function deleteCross() {
  button.textContent = text;
  button.style.filter = 'drop-shadow(0px 0px 0px white)';
}

