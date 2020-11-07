// Traversing Dom

var itemsList = document.querySelector('#items');

// parentNode props
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.background = 'yellow'

// console.log(itemsList.parentNode.parentNode.parentNode);

// parentElement

// console.log(itemsList.parentElement);
// itemsList.parentElement.style.background = 'blue'

// childNodes
// console.log(itemsList.childNodes);

// console.log(itemsList.children);

// // to specify the particular children

// itemsList.children[1].style.backgroundColor = 'green';

// // firstchild
// console.log(itemsList.firstchild);
// // firstELementChild

// console.log(itemsList.firsElementChild);

// itemsList.firstElementChild.style.backgroundColor = 'red'

// console.log(itemsList.lastElementChild);

// itemsList.lastElementChild.textContent = 'Rank 1'


// nextsiblings

// console.log(itemsList.nextSibling);
// console.log(itemsList.nextElementSibling);

// PreviousSiblings

// console.log(itemsList.previousSibling);
// console.log(itemsList.previousElementSibling);

// itemsList.previousElementSibling.style.color = 'violet'
// itemsList.nextElementSibling.style.color = 'green'


//  CreateElement in js

//  create a div


// var newDiv = document.createElement('div')
// // creates a class
// newDiv.className = 'hey';
// // creates a id
// newDiv.id = 'hello';
// // creates a list of class
// // newDiv.classList = 'bhuji', "hey"

// // creates an attributes  which means title , name to the tag
// newDiv.setAttribute('title' , "hellodiv")

// // lets create a node

// var newDivText = document.createTextNode('hello i am bhubesh')

// //  lets append this to the newDiv

// newDiv.appendChild(newDivText);


// // what we are doing here is just adding the div tag which we created above adding to above the header tag
// var container = document.querySelector('header .container' );

// var h1 = document.querySelector('header  h1')

// console.log(newDiv);

// // the tag is added to the page
// container.insertBefore(newDiv , h1)

// // lets chnage the color and the font of the tag

// newDiv.style.color = 'blue'


// Events in JS 

// create an click event

// var button = document.getElementById('button').addEventListener(
//     'click' , (buttonClick) =>{
//         console.log('ButtonClicked');
//     }
// );

// second way of doing the function
//  just passing the function in the above code
// function buttonClick(){
//     console.log("ButtonClicked");
// }


// document.getElementById('header-title').textContent = 'hooooo';
// document.querySelector('#main').getElementsByClassName.backgroundColor = ' yellow'

// var button = document.getElementById('button').addEventListener(
//     'click' , (buttonClick)
// );

// function buttonClick(e){
    // // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);


    // var output = document.getElementById('output');
    // output.innerHTML  = '<h3>'+e.target.id+'</h3>';



    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.offsetX);

//     console.log(e.altKey);
//     console.log(e.shiftKey);

// };

// var button = document.getElementById('button')
// var box = document.getElementById('box');


// // button.addEventListener('click' , (runEvent))
// // button.addEventListener('dblclick' , (runEvent))
// // button.addEventListener('mousedown' , (runEvent)) 
// // button.addEventListener('mouseup' , (runEvent)) 


// // box.addEventListener('mouseenter' , runEvent);
// box.addEventListener('mousemove' , runEvent);
// // box.addEventListener('mousedown' , runEvent);
// // box.addEventListener('mouseleave' , runEvent);
// // box.addEventListener('mouseover' , runEvent);

// function runEvent(e){
//     console.log('Event Type:' +e.type);

// }

// box.style.backgroundColor = "rgb("+e.offsetX +","+e.offsetY+",40)";



// KeyBoard



// Dom End













