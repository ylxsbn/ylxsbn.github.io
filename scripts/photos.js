var title = document.getElementById('title');
var arrow = document.getElementById('arrow');
var subtext = document.getElementById('subtext');
var subtext1 = document.getElementById('subtext1');
var wrapper = document.querySelector('.wrapper');

var counter = 0;


window.addEventListener('mousemove', dynamic);

var flag;

function dynamic(e){

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
    
    showPicture();
    subtext1.textContent = Math.floor((e.x / window.innerWidth) * 8) + 1;

    // if (e.y <= 500) {
    //     arrow.textContent = '↑';
    //     arrow.style.color = '#00FF00';
    // } 
    

    if (e.y > window.innerHeight/1.4){
        arrow.textContent = '↓';
    }

    if (e.y > window.innerHeight/1.2){
        subtext.style.opacity = '0';
        arrow.style.color = 'red';
        wrapper.style.opacity = '1';
    }

    else {
        arrow.textContent = '?';
        arrow.style.color = '#00FF00'

    }
}