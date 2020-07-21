// fetch api

console.log("Fetch api");

// making a get request from the user

fetch("https://jsonplaceholder.typicode.com/posts/1" )
.then(response=>response.json())
.then(data => console.log(data))




// to make a post request

fetch("https://jsonplaceholder.typicode.com/posts" ,{
    method: "post",
    body: json.stringfy({
        userid : 541,
        title : "some title",
        body : "lorem ipsum",
    })
}).then(response=>response.json())
.then(data=> console.log(data))


// using aait function 

// jokes api
function fetchjokes(){
    const response =  await  fetch('https://api.chucknorris.io/jokes/random')
    const data = await response ;
    console.log(data);
}

fetchjokes();


// const data = await response.json();

// sringify , whic hconverts to the string into the json string
