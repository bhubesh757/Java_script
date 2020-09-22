// const { reject } = require("async");

let users = [
    {name:'karan johar' , age: 42},
    {name:'dev padikkal' , age : 20},
    {name :'bhubesh' , age:19}
];

let user; 
                                                //  promise
function getUserData(){

    return new Promise((resolve , reject)=>{
        setTimeout(function(){
            user = users.filter(function(u){
           return u.age == 20;
       });
       if (user.length == 1){
           resolve(user[0])
       }else{
           reject('User not Found');
       }
       // return user;
   },3000); 
        
    })
    
}

function updateUser(user){
     return new Promise((resolve, reject) => {
        user.name = "bhuji"
        resolve(user)
    })
    
}

// function updateName(){
//     setTimeout(() => {
//         user[0].name = "bhuji";
//         console.log(user[0]);
        
//     }, 5000);

// }
// getUserData(updateName);

// getUserData(function(){
//     user[0].name = "bhubhu";
//     console.log(user[0]);
// });

// promises => used to replace the callback function

// handling the promises is very easy to use comparer to the callback
// handling the promises


// promise

// getUserData()
//     .then((response)=> updateUser(response)
//     .catch((error)=>console.log(error));


// getUserData()
//     .then((response) =>{
//         updateUser(response).then((response1)=>{
//             console.log(response1);
//         })
//     })
//     .catch(error) => console.log(error);


let users = [
    { name: "Darshan", age: 25 },
    { name: "Velan", age: 34 },
    { name: "Geetika", age: 22 },
  ];
  
  // promises
  
  let user;
  
  function getUserData() {
    return new Promise((resolve, reject) => {
      user = users.filter(function (u) {
        return u.age == 22;
      });
  
      if (user.length == 1) {
        resolve(user[0]);
      } else {
        reject("User was not found");
      }
    });
  }
  
  function updateUser(user) {
    return new Promise((resolve, reject) => {
      user.name = "geet";
      resolve(user);
    });
  }
  
  function updateAge(user) {
    return new Promise((resolve, reject) => {
      user.age = 45;
      resolve(user);
    });
  }
  
  // getUserData()
  //   .then((response) => {
  //     console.log(response);
  //     updateUser(response).then((response1) => {
  //       console.log(response1);
  //     });
  //   })
  //   .catch((error) => console.log(error));
  
  async function callEverything() {
    let response = await getUserData();
    console.log(response);
    let up1user = await updateUser(response);
    console.log(up1user);
    let up2user = await updateAge(up1user);
    console.log(up2user);
  }
