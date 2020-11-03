let opacity =0;
let intervalId = 0;

function fadeout(){
    intervalId = setInterval(hide,200);
}
function hide(){
    var img = document.getElementById('panther');
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

    if(opacity>0){
        opacity = opacity-0.1;
        img.style.opacity = opacity;
        console.log(opacity);
    }
    else{
        clearInterval(intervalId);
    }
}

function fadein(){
    intervalId = setInterval(show,20);
}
function show(){
    var img = document.getElementById('panther');
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

    if(opacity<1){
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
        console.log(opacity);
    }
    else{
        clearInterval(intervalId);
    }
}
