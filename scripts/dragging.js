export function makeDraggable(target) {
  var pos1, pos2, pos3, pos4;

  target.onmousedown = mouseDown;

  function mouseDown(e) {
    e = e || window.event;
    e.preventDefault();


    pos3 = e.clientX;
    pos4 = e.clientY;
    
    document.onmouseup = closeDragTarget;
    document.onmousemove = dragTarget;
  }

  function dragTarget(e) {    
    target.style.transition = 'filter 0.5s';
    
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

