var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 60;
var minRadius =  0 ;

var colorArray = [
    '#fe3e02',
    '#4C00FF',
    '#B3FF00'
]

window.addEventListener('mousemove', 
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.fillStyle = this.color;
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth ||this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight ||this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 150 ) {
            if (this.radius < maxRadius){
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius){
            this.radius -= 1   ;
        }

        this.draw();
    }
}
var circleArray = [];
function init() {
    circleArray = [];

    for (var i = 0; i < 1000; i++){ 
    var radius = Math.random() * 6 + 1,
        x = Math.random() * (window.innerWidth - radius*2) + radius,
        y = Math.random() * (window.innerHeight - radius*2) + radius,
        dx = (Math.random() - 0.5) * 5,
        dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius)); 
    }
}
init();
function animate(){
    requestAnimationFrame(animate);
    console.log('test');
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    

}
animate();