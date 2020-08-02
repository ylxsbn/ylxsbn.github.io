window.addEventListener('mousemove', function(e){
    var mousecords = document.getElementById('mousecords');
    var time = document.getElementById('time');
    var os = document.getElementById('os');
  
    mousecords.textContent = `[x:${e.x}, y: ${-e.y}]`;
    time.textContent = `time: ${new Date()}`;
    os.textContent = `OS: ${navigator.appVersion}`;
  })