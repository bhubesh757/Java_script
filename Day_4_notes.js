// day 4

// loops in js

// for loop
/* 
syntax:
for(int ; cndition ; inc / dec ){
    code to be repeated until the condition is satisfied
}


*/

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

// using an Array
let arr = ['bhubesh' , ' charan' , 'karan'];
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);



// while loop 
/*
while(some cndtion){
    do this thing
}

*/

let i = 5;
while(i <= 10){
    console.log(i);
    i++;
}


/*
do while loop
do{

    run this code
}while(this cndtion is true)


*/ 

let i = 0;
do{

    console.log(i);
    i++
}while(i < 10)


// for each


//arr.forEach(function(element , index , array))
//console.log(element , index , array)



let arr = ['car' , ' bus' , 'bike' , 'auto'];
arr.forEach(function(vehicles){
    console.log(vehicles)
})


let person = {
    name : "bhubesh",
    age :  18,
    city : "vellore",
}

for (key in person){
    console.log(`the key is ${key} and the value is ${person[key]}`);

}

// using the break statement

for(let i=1; i<= 10; i++){
    if(i == 3){
        break;
    }

    console.log(i);
}

// using continur statemnt

for(let i=1; i<= 10; i++){
    // if(i == 3){
        // break;
    // }
    if(i == 3){
        continue;
    }

    console.log(i);
}

// break statement breaks out the loop 
// continue stmt skips the iteration

// debugging
// use debugger keyword

debugger;


// math.min()
// minimum value
console.log(Math.min(1 , 2 , 3 , 4 , 5 , 0));

console.log(Math.max(1 , 2 , 3 , 4 , 5 , 0));

console.log(Math.pow(4 , 5));

console.log(Math.abs(5));

console.log(Math.sqrt(81));

console.log(Math.(81));

console.log(Math.PI);


//  eg: console.log(Math.PI * Math.pow(4,8))

let num = 45.78544752;
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))  


// math.random()
// it will gnerate the number betwwn the 0 and 1 where the 1 is excluded//


console.log(Math.random());

console.log(Math.floor(Math.random()));


// min , max 
// to generate the randomm number bet the min and max 
// console.log(math.floor(math.random()*(max-min))+min)

// example

console.log(Math.floor(Math.random() *(25 - 10 + 1))+10)


// date and time object

let today = new Date();
today = new Date();
console.log(today)

console.log(today.getFullYear()) // 2020
// .getTime()  it returns the milliseconds from jan  1970 to till year
console.log(today.getTime());
console.log(today.setDate());  // we can change the date
console.log(today.setMonth()); // it sets the month and also changes the month
console.log();

// destructuring the objects

let person = {
    name : "bhubesh"
    age : 18
    hobby : "coding"
    address : {
        city : "chennai",
        lanenumber : 5,
    },
    
}
console.log(person.hobby);
console.log(person.address.city);

const {name , age , hobby} = person;
console.log(name , age , hobby)  // destructuring the objects

// destructuring arrays

let arr = [' apple ' , 'samsung' ,' realme' , 'honor']

let  firstname = arr[0];
let lastname = arr[1];

console.log(`${firstname} ${lastnmae}`)


let [firstname , lastnmae] = [' apple ' , 'samsung' ,' realme' , 'honor']
console.log(`${firstname} ${lastnmae}`)


// spread operator

let friends = ['bhuji' , 'charan' , 'karan'];

let contacts = friends;  // it exports it from the friends array;

console.log(contacts);

// spread operator in objects

let person  = {

    name : 'charan'
    age : 19
    city : 'chennai'

}

let person  = {
    ...person

    salary : "35k"
    designation : "test engineer"
    city : 'chennai'

}

console.log(person)
console.log(employee)


// arrow functions

let add = function(n1 , n2){

return n1 + n2;


}

let result = add(10 , 54)
console.log(result)



let add = (n1 , n2) => n1 + n2;

let result = add(10 , 20)
console.log(result)


let join = (a,b) => `the value of a is ${a} & b is ${b}`

let line = join('hi' , 'hello')

console.log(line)



let greet = (name) => `hey ${name} welcome to chennai`

let log = greet('bhubesh')

comsole.log(log)
