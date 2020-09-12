function makeDraggable(target) {
  draggable = target
  draggable.addEventListener('mousedown', mousedown);

  function mousedown(e) {   
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let _prevX = e.x;
    let _prevY = e.y;

    function mousemove(e) {
      draggable.style.transition = 'filter 0.5s'
      
      if (!isResizing) {
        let newX = _prevX - e.x;
        let newY = _prevY - e.y;

        const rect = draggable.getBoundingClientRect();

        draggable.style.left = rect.left - newX + 'px';
        draggable.style.top = rect.top - newY + 'px';

        _prevX = e.x;
        _prevY = e.y;
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

      let _prevX = e.clientX;
      let _prevY = e.clientY;

      draggable.addEventListener('mousemove', mousemove);
      draggable.addEventListener('mouseup', mouseup);

      function mousemove(e) {
        const rect = draggable.getBoundingClientRect();

        if (currentResizer.classList.contains('br')) {
          draggable.style.width = rect.width - (_prevX - e.clientX) + 'px';
          draggable.style.height = rect.height - (_prevY - e.clientY) + 'px';
          draggable.style.fontSize = (rect.width - (_prevX - e.clientX)) / 24 + 'px';
        } else if (currentResizer.classList.contains('bl')) {
          draggable.style.width = rect.width + (_prevX - e.clientX) + 'px';
          draggable.style.height = rect.height - (_prevY - e.clientY) + 'px';
          draggable.style.left = rect.left - (_prevX - e.clientX) + 'px';
          draggable.style.fontSize = (rect.width - (_prevX - e.clientX)) / 24 + 'px';
        } else if (currentResizer.classList.contains('rt')) {
          draggable.style.width = rect.width - (_prevX - e.clientX) + 'px';
          draggable.style.height = rect.height + (_prevY - e.clientY) + 'px';
          draggable.style.top = rect.top - (_prevY - e.y) + 'px';
          draggable.style.fontSize = (rect.width - (_prevX - e.clientX)) / 24 + 'px';
        } else {
          draggable.style.width = rect.width + (_prevX - e.clientX) + 'px';
          draggable.style.height = rect.height + (_prevY - e.clientY) + 'px';
          draggable.style.top = rect.top - (_prevY - e.y) + 'px';
          draggable.style.left = rect.left - (_prevX - e.x) + 'px';
          draggable.style.fontSize = (rect.width - (_prevX - e.clientX)) / 24 + 'px';
        }

        _prevX = e.x;
        _prevY = e.y;

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
const bb = document.getElementById('panel');

// draggable(bb);
makeDraggable(ff);

makeDraggable(bb);


const panel = document.getElementById('panel');

var randomWidth = Math.random() * window.innerWidth;
var randomHeight = Math.random() * window.innerHeight;


ff.style.top = randomHeight/1.2 + 'px';
ff.style.left = randomWidth - 200 + 'px';
ff.style.opacity = 1;


draggable.style.transition = 'all 2s';


function addCross(number) {  
  button = document.getElementById(`button${number}`);
  text = button.textContent;
  button.textContent = '+' + text;
}

function deleteCross() {
  button.textContent = text;
  button.style.filter = 'drop-shadow(0px 0px 0px white)';
}

