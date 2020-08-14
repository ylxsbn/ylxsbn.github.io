var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x, y, i;
const size = 2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x, y;

var mouseX = 1000;
var mouseY = 1000;

window.addEventListener('mousemove', function(e){
    mouseX = e.x/10;
    mouseY = e.y - window.innerHeight/2;
});

window.addEventListener('resize', function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});


const fps = 24;
var step = 0;

function drawSin(){

    setTimeout(function() {    
        
        window.requestAnimationFrame(drawSin);
        var step = Math.random() + 0.04;
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (x = 0; x < window.innerWidth; x += step){
        
            // y = Math.tan(Math.tan(Math.sin(Math.cos(Math.sin(Math.cos(x))))));
            // sine function
            y = Math.sin(x);
        
        ctx.beginPath();
        ctx.fillStyle = "#00FF00";

        //multiply x variable for different results
        ctx.fillRect(x, y * mouseY + window.innerHeight/2, 1, 1);
        
        }
        
    }, 1000/fps);

    }

    drawSin();