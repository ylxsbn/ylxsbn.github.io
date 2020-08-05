const dragObj = document.getElementById('infobar');

dragObj.addEventListener('mousedown', mousedown);

function mousedown(e){
  console.log(e);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.x;
    let prevY = e.y;

    function mousemove(e){
      if (!isResizing) {
      
        let newX = prevX - e.x;
        let newY = prevY - e.y;
    
        const rect = dragObj.getBoundingClientRect();

        dragObj.style.left = rect.left - newX + 'px';
        dragObj.style.top = rect.top - newY + 'px';

        prevX = e.x;
        prevY = e.y;
      }
    }

    function mouseup(){
       window.removeEventListener('mousemove', mousemove);
       window.removeEventListener('mouseup', mouseup);
    }
}

dragObj.ondragstart = function() {
  return false;
};


const rect = dragObj.getBoundingClientRect() - 1;
let isResizing = false;

const resizers = document.querySelectorAll('.resizer');
let currentResizer;

for (let resizer of resizers){ 
  resizer.addEventListener('mousedown', mousedown);
    
    function mousedown(e){
      currentResizer = e.target;
      
      isResizing = true;
      
      let prevX = e.clientX;
      let prevY = e.clientY;

      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);

      function mousemove(e){
        const rect = dragObj.getBoundingClientRect();

        if (currentResizer.classList.contains('br')) {
          dragObj.style.width = rect.width - (prevX - e.clientX) + 'px';
          dragObj.style.height = rect.height - (prevY - e.clientY) + 'px';
        } else if (currentResizer.classList.contains('bl')) {
          dragObj.style.width = rect.width + (prevX - e.clientX) + 'px';
          dragObj.style.height = rect.height - (prevY - e.clientY) + 'px';
          dragObj.style.left = rect.left - (prevX - e.clientX) + 'px';
        } else if (currentResizer.classList.contains('rt')){
          dragObj.style.width = rect.width - (prevX - e.clientX) + 'px';
          dragObj.style.height = rect.height + (prevY - e.clientY) + 'px';
          dragObj.style.top = rect.top - (prevY - e.y) + 'px';
        } else {
          dragObj.style.width = rect.width + (prevX - e.clientX) + 'px';
          dragObj.style.height = rect.height + (prevY - e.clientY) + 'px';
          dragObj.style.top = rect.top - (prevY - e.y) + 'px';
          dragObj.style.left = rect.left - (prevX - e.x) + 'px';
        }

        prevX = e.x;
        prevY = e.y;

      }

      function mouseup(e){
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        isResizing = false;
      }      

    }
  }





var panel = document.getElementById('panel');

function addCross(number) {  
  button = document.getElementById(`button${number}`);
  text = button.textContent;
  
  button.textContent = '+' + text;
  panel.style.filter = 'drop-shadow(0 0 0px #ff0000)';
  button.style.filter = 'drop-shadow(0 0 5px #ff0000)';
  panel.style.border = '1px solid #ff0000';
}

function deleteCross() {
  button.textContent = text;
  panel.style.filter = 'drop-shadow(0 0 5px #00FF00)';
  panel.style.color = '#00FF00';
  panel.style.border = '1px solid #00FF00';
  button.style.filter = 'drop-shadow(0 0 0px #ff0000)';
}