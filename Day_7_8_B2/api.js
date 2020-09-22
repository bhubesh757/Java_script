//  fetch api 

fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     console.log(response.json());
// })

.then((response) =>{
    response.json().then((data)=>{
        console.log(data);
    });

})
.catch((error)=>{
    console.log(error);
})


// post request

fetch("https://jsonplaceholder.typicode.com/users" , {
    method:"post",
    body:JSON.stringify({
        name : "Bhubesh",
        userName : "bhuji"
    }),
    headers:{
        "content-Type" : "application/json"

    }
}).then(response =>{
//     console.log(response.json());
    response.json().then(data =>{

        console.log(data);
    })

})