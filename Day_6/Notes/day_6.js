// day 6
// DOM
/*
geting elemnents
1. getelemnentbyid
2.getlementbyclassname
3.getelementstbytagname
4.queryselector
5.queryselectorall
*/ 


const title = document.getElementById("title")
console.log(title);
console.log(title.innerHTML);
console.log(title. innerText)

const data = document.getElementsByClassName('imp')
console.log(data)

const allp = document.getElementsByTagName('p');

console.log(allp)

// queryselector
console.log(document.querySelector('.imp')); // it will be nodelist
const data1 = document.querySelectorAll('imp')
console.log(data1);



const data2 = document.querySelector('p');
console.log(data2);

// change the attributes and the classes in javascript

const attr = document.getElementById('attribute');
console.log(attr.getAttribute('id'))


attr.setAttribute('style' , 'color:red;');
attr.setAttribute('style' , 'background-color:blue');

attr.classList.add('blue')  // add the class to the list
attr.classList.add('bgyellow');
attr.classlist.remove('blue')
attr.classList.toggle('blue')



// attr.style in console // use camelcasing

attr.style.color = "red";
attr.style.backgroundColor = "yellowgreen"
attr.style.backgroundColor = "";


let fruits = ['orange ' , 'apple ' , 'watermelon' , 'pineapple']

console.log(fruits)

const list = document.querySelector('#list');
console.log(list);

fruits.forEach(fruit=>{
    // list.innerText += `<li>${fruit}<li>`;
    // use innerhtml 
    list.innerHTML += `<li>${fruit}</li>`;

})

dataarr.forEach(para=>{
    if(para.innerText.includes('amet')){
        para.classList.add('higlight');
    }
})

function showalert(){
    alert("hey i am alert from the user of the button")
}


const button = document.getElementById('btn');

button.onclick = ()=>{
    alert("hey i  am alert from the use of the button")
}

// get name from the user to change the title of the js

const name = prompt("enter your name","anonymous");

title.innerText +=`welcome to the javascript community guys ${name}`;


// to change the background color of the .js

function changeColor(){
    setTimeout(()=>{
        document.body.style.backgroundColor = 'blue'
        document.body.style.fontFamily = 'helvetica'
    },2000)
}

changeColor();


// to do this in click 

const dmode = document.getElementById('dark');

dmode.onclick = function
changeColor(){setTimeout(()=>{
    document.body.style.backgroundColor = 'blue'
    document.body.style.fontFamily = 'helvetica'
},2000)
}

// to display the clock 
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;


}

// clock();

setInterval(clock,1000);


































