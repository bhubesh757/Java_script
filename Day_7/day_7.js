// console.log("hello")

// create Element


const list = document.querySelector("#list");
// const el = document.createElement('spam');
// console.log(el)

function createElement(el){
    return document.createElement(el);
}


let li = createElement('li');
let a = createElement('a');
console.log(li)

list.appendChild(li);
li.appendChild(a)
a.innerHTML = "youtube";
a .setAttribute('href' , 'https://youtube.com')


// this used to change the insertion in the html that means to insert
list.insertBefore(li,document.getElementsByTagName('li')[0]);
list.removeChild(li,document.getElementsByTagName('li')[0]);

