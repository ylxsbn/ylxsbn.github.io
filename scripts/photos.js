var title = document.getElementById('title');
var photoMain = document.getElementById('photo1');
var arrow = document.getElementById('arrow');
var item = document.getElementById('item');
var subtext = document.getElementById('subtext');

var subtext1 = document.getElementById('subtext1');

window.addEventListener('mousemove', changeBlur);

function changeBlur(e){
    title.style.filter = `blur(${(e.x - e.y)/250 + 12}px)`;
    arrow.style.top = (e.y - 70) + 'px';
    arrow.style.left = (e.x - 40) + 'px';

    var randomNumber = Math.floor(Math.random() * 5 + 1);
    var photo = document.getElementById(`photo${randomNumber}`)
    var photo2 = document.getElementById(`photo${randomNumber - 1}`)
    
    subtext1.textContent = randomNumber * Math.random();

    photo.style.display = 'block';
    photo2.style.zIndex = randomNumber;
    // photo.style.top = Math.random() * window.innerHeight/2 + 500 + 'px';
    // photo.style.left = Math.random() * window.innerWidth + 'px';
    photo2.style.display = 'none';
    // photo.style.width = randomNumber * 60 + 'px';
    // photo2.style.mixBlendMode = 'hard-light';


    if (e.y > window.innerHeight/1.4){
        arrow.textContent = '↓';
        subtext.textContent = 'GO TO THE PHOTOS.';
        
    }
    else if (e.y <= 150){
        arrow.textContent = '↑';
        arrow.style.color = '#00FF00';
        item.style.opacity = 1;
        photoMain.style.opacity = 0;
        arrow.style.color = 'red';
    }
    else {
        arrow.textContent = '?';
        arrow.style.color = '#00FF00'
    }

    if (e.y > window.innerHeight/1.2){
        photoMain.style.opacity = 1;
        item.style.opacity = 0;
        subtext.style.opacity = 0;
        title.style.opacity = '0';
        arrow.style.color = 'red';


    }

    // title.style.filter = `blur(${((window.innerWidth + e.x) + (window.innerHeight - e.y))/250 + 5}px)`;
}