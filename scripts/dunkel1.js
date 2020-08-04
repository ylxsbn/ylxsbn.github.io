var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

const input = document.getElementById("inputform");

window.fps = input.value;

function getFps(){
window.fps = input.value;

var title = document.querySelector('.title');

if (window.fps > 60){
    title.textContent ='Be careful';
}
if (window.fps > 100) {
    title.textContent = "Don't do that";
}
if (window.fps > 200){
    title.textContent = 'Goodbye';
    canvas.style.opacity = "0";
    title.style.color = '#ff0000';
    title.style.filter = 'drop-shadow(0 0 5px #ff0000)';
    setTimeout(closeWindow, 2500);
}

function closeWindow() {
    window.open('','_self').close();
}


}

var value = 200;

var size = 1;

var shift = 3;

function showMask() {
    document.getElementById('mask').style.opacity = '1';
    document.getElementById('star').style.opacity = '1';
}

// function getRandom(){
//     posX = Math.random() * window.innerWidth;
//     posY = Math.random() * window.innerHeight;
//     console.log(123);
//     requestAnimationFrame(getRandom);
// }

function draw() {  
    setTimeout(function() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < value   ; i++) { 
            posX = Math.random() * window.innerWidth;
            posY = Math.random() * window.innerHeight;
            //drawing figure
            c.beginPath();
            c.fillStyle = '#00FF00';
            
            c.fillRect(posX, posY, size, size);
            c.fillRect(posX-shift, posY, size, size);
            c.fillRect(posX+shift, posY, size, size);
            c.fillRect(posX, posY+shift, size, size);
            c.fillRect(posX, posY-shift , size, size);
            
            setTimeout(showMask, 200);   
        }
    }, 1000/window.fps);
}

draw();

// window.addEventListener('mousemove', function(e){
//     c.beginPath();
//     c.fillStyle = '#00FF00';
//     c.fillRect(e.x, e.y, size*20, size*20);
// });
// var aX, aY;

// var r = 2;

// var funct = Math.pow(aX, 2) + Math.pow(aY, 2);
// var radius = Math.pow(r, 2);

// for (aX = 1, aY = 1; funct == radius; aX++, aY++){
//     c.beginPath();
//     c.fillStyle = '#00FF00';
//     c.fillRect(aX, aY, 4, 4);
// }