var width = 100;
var difference = 2;

var intervalId = 0;



function increase(){
    clearInterval(intervalId)
    intervaliId  = setInterval(zoomin , 20);
}

function zoomin(){
    
    if(width<200){
        width = width + difference;
        document.getElementById('ironman').style.width = width;
        console.log(width);
    }
    else{
        clearInterval(intervalId);
    }
}



function decrease(){
    clearInterval(intervalId)
    intervalId = setInterval(zoomout , 20);
}

function zoomout(){
    
    if(width>100){
        width = width - difference;
        document.getElementById('ironman').style.width = width;
    }
    else{
        clearInterval(intervalId);
    }
}