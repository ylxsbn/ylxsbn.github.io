function makeDraggable(target) {
  draggable = target
  draggable.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    
    console.log(e);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.x;
    let prevY = e.y;

    function mousemove(e) {
      draggable.style.transition = 'all 0s'
      
      if (!isResizing) {

        let newX = prevX - e.x;
        let newY = prevY - e.y;

        const rect = draggable.getBoundingClientRect();

        draggable.style.left = rect.left - newX + 'px';
        draggable.style.top = rect.top - newY + 'px';

        prevX = e.x;
        prevY = e.y;
      }
    }

    function mouseup() {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }
  }

  draggable.ondragstart = function () {
    return false;
  };


  const rect = draggable.getBoundingClientRect() - 1;
  let isResizing = false;

  const resizers = document.querySelectorAll('.resizer');
  let currentResizer;

  for (let resizer of resizers) {
    resizer.addEventListener('mousedown', mousedown);

    function mousedown(e) {
      currentResizer = e.target;

      isResizing = true;

      let prevX = e.clientX;
      let prevY = e.clientY;

      draggable.addEventListener('mousemove', mousemove);
      draggable.addEventListener('mouseup', mouseup);

      function mousemove(e) {
        const rect = draggable.getBoundingClientRect();

        if (currentResizer.classList.contains('br')) {
          draggable.style.width = rect.width - (prevX - e.clientX) + 'px';
          draggable.style.height = rect.height - (prevY - e.clientY) + 'px';
          draggable.style.fontSize = (rect.width - (prevX - e.clientX)) / 24 + 'px';
        } else if (currentResizer.classList.contains('bl')) {
          draggable.style.width = rect.width + (prevX - e.clientX) + 'px';
          draggable.style.height = rect.height - (prevY - e.clientY) + 'px';
          draggable.style.left = rect.left - (prevX - e.clientX) + 'px';
          draggable.style.fontSize = (rect.width - (prevX - e.clientX)) / 24 + 'px';
        } else if (currentResizer.classList.contains('rt')) {
          draggable.style.width = rect.width - (prevX - e.clientX) + 'px';
          draggable.style.height = rect.height + (prevY - e.clientY) + 'px';
          draggable.style.top = rect.top - (prevY - e.y) + 'px';
          draggable.style.fontSize = (rect.width - (prevX - e.clientX)) / 24 + 'px';
        } else {
          draggable.style.width = rect.width + (prevX - e.clientX) + 'px';
          draggable.style.height = rect.height + (prevY - e.clientY) + 'px';
          draggable.style.top = rect.top - (prevY - e.y) + 'px';
          draggable.style.left = rect.left - (prevX - e.x) + 'px';
          draggable.style.fontSize = (rect.width - (prevX - e.clientX)) / 24 + 'px';
        }

        prevX = e.x;
        prevY = e.y;

      }

      function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        isResizing = false;
      }

    }
  }
}
const ff = document.getElementById('c');
const bb = document.getElementById('bg');

// draggable(bb);
makeDraggable(ff);


const panel = document.getElementById('panel');

var randomWidth = Math.random() * 1920/1.5
var randomHeight = Math.random() * 1080/1.5

ff.style.top = randomWidth + 'px'
ff.style.left = randomHeight + 'px'


draggable.style.transition = 'all 2s'


function addCross(number) {  
  button = document.getElementById(`button${number}`);
  text = button.textContent;
  button.textContent = '+' + text;
}

function deleteCross() {
  button.textContent = text;
  button.style.filter = 'drop-shadow(0px 0px 0px white)';
}

