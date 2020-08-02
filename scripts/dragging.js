var dragObj = document.getElementById('infobar');

dragObj.onmousedown = function(e) {

  dragObj.style.position = 'absolute';
  moveAt(e);

  document.body.appendChild(dragObj);

  dragObj.style.zIndex = 1000;

  function moveAt(e) {
    dragObj.style.left = e.pageX - dragObj.offsetWidth / 2 + 'px';
    dragObj.style.top = e.pageY - dragObj.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  dragObj.onmouseup = function() {
    document.onmousemove = null;
    dragObj.onmouseup = null;
  }
}

dragObj.ondragstart = function() {
  return false;
};

var panel = document.getElementById('panel');

function addCross(number) {  
  button = document.getElementById(`button${number}`);
  text = button.textContent;
  
  button.textContent = '+' + text;
  panel.style.filter = 'drop-shadow(0 0 0px #ff0000)';
  panel.style.border = '1px solid #ff0000';
}

function deleteCross() {
  button.textContent = text;
  panel.style.filter = 'drop-shadow(0 0 5px #00FF00)';
  panel.style.color = '#00FF00';
  panel.style.border = '1px solid  #00FF00';
  
}