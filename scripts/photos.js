var title = document.getElementById('title');


window.addEventListener('mousemove', changeBlur);

function changeBlur(e){
    title.style.filter = `blur(${(e.x - e.y)/250 + 12}px)`;
    // title.style.filter = `blur(${((window.innerWidth + e.x) + (window.innerHeight - e.y))/250 + 5}px)`;
    console.log(123);
}