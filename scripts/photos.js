var title = document.getElementById('title');
var arrow = document.getElementById('arrow');
var subtext = document.getElementById('subtext');
var subtext1 = document.getElementById('subtext1');
var body = document.getElementById('body1');


var counter = 0;

body1.style.backgroundColor = 'black';

window.addEventListener('mousemove', changeBlur);

function changeBlur(e){

    console.log(window.innerWidth / e.x)

    title.style.filter = `blur(${(e.x - e.y)/250 + 12}px)`;
    arrow.style.top = (e.y - 70) + 'px';
    arrow.style.left = (e.x - 40) + 'px';
    
    var photo;
// Rework a bit / get rid of flashing
    function showPicture() {
        if (counter < 8) {
            counter++;
            photo = document.getElementById(`photo${Math.floor((e.x / window.innerWidth) * 8) + 1}`);
            photo.style.display = 'block';
        }
        else {
            counter = 0;
            for (var i=1; i <= 8; i++) {
                photo = document.getElementById(`photo${i}`);
                photo.style.display = 'none';
            }
        }
    }

    showPicture()
    
    subtext1.textContent = Math.floor((e.x / window.innerWidth) * 8) + 1;


    // photo.style.width = randomNumber * 60 + 'px';
    // photo2.style.mixBlendMode = 'hard-light';
    // photo.style.top = Math.random() * window.innerHeight/2 + 500 + 'px';
    // photo.style.left = Math.random() * window.innerWidth + 'px';


    if (e.y > window.innerHeight/1.4){
        arrow.textContent = '↓';
        // subtext.textContent = 'GO TO THE PHOTOS.';
    }
    else if (e.y <= 150){
        arrow.textContent = '↑';
        arrow.style.color = '#00FF00';
        arrow.style.color = 'red';
    }
    else {
        arrow.textContent = '?';
        arrow.style.color = '#00FF00'
    }

    if (e.y > window.innerHeight/1.2){
        subtext.style.opacity = 0;
        title.style.opacity = '0';
        arrow.style.color = 'red';
    }

    // title.style.filter = `blur(${((window.innerWidth + e.x) + (window.innerHeight - e.y))/250 + 5}px)`;
}