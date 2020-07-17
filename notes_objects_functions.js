//  Day - 3
// differnce between the number and the parseint()

let strnum = "12456ahello"
console.log(strnum)

// object
let obj = {
    name : "BHUBESH",
    skills: "coding",
    age : "18",
    canFly : false,
};

console.log(obj)
console.log(obj.age)

// functions

// syntax : function nameoFunction(parameter if any needed){
    // write your code here
}

function hey(){
    console.log("hey guys this is bhubesh")
}

hey(); // calling the function

// or

let greet = function(){
    console.log( " i am a function assumed to a variable ")4

}
greet()

// by passing the parameters


let hi = function(name){
    console.log(`hey ${name}` , "welcome to the javascript course")
}

hi("bhubesh")

// addition
let adition = function



/*
> , < , <= , >= , == , === , !=

logical
AND &&
OR ||

*/
console.log(5>6)


let num = 5;
console.log(num >= 5)
console.log(num == 5);
console.log(1 !== "1");  //true
console.log(num === 5);


//logical 
console.log(2 > 3 && 1 > 0)  //  false


let val = 5 > 2
connsole.log(val)


console.log(false == 0);
console.log(true == 1);

// string comparison
//Lexicographic order is the way of ordering of words based on the alphabetical order of their component letters. It is also known as lexical order, dictionary order and alphabetical order. It
//  similar to the way in we search any word in the dictionary.

console.log("abc" > "abcd");

console.log(null > 0);
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0) // true
//  why it is true
console.log(Number(null))  // shows 0

// undefined

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0) 

console.log(Number(undefined)) // NaN  not an number


// conditional statements

/* 
if
if else
if elseif else
ternary operator

*/ 

let age = prompt("enter your age ")
console.log(age, typeof age);
// use + infront the prompt to change the whole thing into the numver


// if block
/* if(condition){
    code to evaluate the constion is true or not

}
*/ 
if(age >= 18){

    console.log('i am 18 , i am eligible to vote' )
}

if(1){

    console.log("true")
}

// if else

age = 20;

if(age >= 18){
    console.log("you are an adult")
}


if (age == 25){
    console.log("you are 25")
}
else{
    console.log("you are not an adult")
}

if (age == 18){

    console.log("your age will be 18")

}
else{
    console.log("your are not 18, your age is or 18")
}


// ternary operators
// syntax // constion ? value  if true : value if false

let age = 18;
console.log(age >= 18 ? "you are eligible to vote" :" you are not eligible to vote");

//  or

let result = (age = 18) ? "you are eligible to vote":
            (age <= 18) ? "you are not eligible to vote "

console.log(reuslt)


// switch case
/* 
syntax
switch(arg){
    case 1 :
        code here
        break:
    case 2:
        code here
        break
}

*/ 

// loops

/*
while loop 
do while loop


*/ 

// syntax  for
