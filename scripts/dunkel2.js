const panel = document.getElementById('panel');

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