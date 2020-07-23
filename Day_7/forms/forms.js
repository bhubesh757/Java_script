// // console.log('hi')

// // const loginform = document.forms.myform;
// const loginform = document.getElementById("myForm")
// const message = document.getElementById('msg')

// loginForm.addEventListener('submit',(event)=>
// {
   
//      event.preventDefault();

//     //  console.log(event.target.email.value);
//     if(loginForm.name.value == ""){
//         message.innerHTML = "Name should not be empty";
//  }
// })


// console.log("forms 2")

// function validation(){
//     const username = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const namemsg = document.getElementById('namemsg');
//     if(username == ""){
//         namemsg.innerHTML = "username cannot be empty";
//         return false;
//     }
//     if(username.length<4){
//         namemsg.innerHTML = "username cannot be less than 4 characters";
//         return false;
//     }
//     if(email==""){
//         emailmsg.innerHTML = "email cannot be empty";
//         return false;
//     }
//     if(!email.includes('@')){
//         emailmsg.innerHTML = "email should contain @";
//         return false;
//     }
// }

console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');


button.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
}

// button.addEventListener('click',function(){

// })