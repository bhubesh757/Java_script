timeinterval mainly the timers 
=> setInterval =>setTimeout
21/09/2020

let counter = 1;
function doSomething(){
    console.log(counter);
    if(counter==10){
        clearInterval(timer)  // this stops the value by 10..function of window
    }
    counter++
}

let timer = setInterval("doSomething()" , 2000)


let data = [5,6,7,8];

data.forEach(function(){
    console.log(data);
},2000)


another method
let timer1 = setInterval(function(){

    console.log(counter);
    if(counter==10){
        clearInterval(timer1)  // this stops the value by 10..function of window
    }
    counter++
},2000)

setTimeout => it calls only by once time

eg:
let t2 = setTimeout(() => {
    console.log("hello i am bhubesh");
}, 5000);

clearTimeout(t2)




let currentDate = new Date();
let currentTime = currentDate.toLocaleTimeString();

document.getElementById('clock').innerHTML = currentTime;

setInterval(() => {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    document.getElementById('clock').innerHTML = currentTime;
    
}, 500);

// synchronous ?


















