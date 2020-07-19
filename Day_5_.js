// q1:
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and
// "fizzbuzz" at multiples of 3 and 5.


for(let i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0){
        console.log(`fizz ${i}`)
    }
    if(i % 5 == 0){
        console.log(` buzz  ${i}`)

    }
    if(i % 15 == 0) {
        console.log(` fizzbuzz  ${i}`)
    }

}
console.log("fizzbuz is consoled successfully")



// Question 2:
// Destructure the following object

const student = {
    name : "Helsinki",
    age : 24,
    projects :{
        dicegame : "two player dice game using javascript"

    }
}
console.log(student.name)
console.log(student.age); // 2
console.log(student.projects.dicegame);  // two player dice game using javascript


// Question 3:
// Imagine you are going out to do some grocery shopping.
// So you have an array called shoppingList with all the products you want to buy.
// Now that you are inside of the shop, you have a basket with all the products from your list, but you want to
// add a few more.
// Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some
// new products into it.



let shoppingList = ['milk' , 'biscuit' , 'wheat' , ',maida' , 'bread']
console.log(shoppingList)

// creating an new array

let shoppingBasket = ['banana' , 'juice' , 'cookies' , 'rice']
// add the new array to the old one
console.log(shoppingList.concat(shoppingBasket))



// Question 4:
// Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,
// Square root, Percentage.

function calculator(rock){
    let n1=parseFloat(console.log('num1').value);
    let n2=parseFloat(console.log('num2').value);
    let x;
    let y = rock;
    
    switch(y)
        {
        case '1':
            x=n1+n2;
            break;
        case '2':
            x=n1-n2;
            break;
        case '3':
            x=n1*n2;
            break;
        case '4': 
            x=n1/n2;
            break;
        case '5':
            x=n2*100/n1;
            break;
        default:
            break;
                
        }
    console.log('result').value=x;
    
        
    
    }

/*
Question 6:
Rewrite the function using '?' or '||'
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them
to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the
input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
handling for a non-numeric input in this task.
*/ 



let num = prompt("Enter the number between 0 to 100 ?" , '');

if(num < 100){
    console.log(" the prompt of the console  wont repeat , and the requirements is fine");

} else if (isNaN(num)){
    prompt("its not a number . enter the number from 1 to 100")

} else{
    prompt(` entered number ${num} is greater than 100 . so enter the number between 1 to 100,'' `)
}




/*
Question 7:
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything
except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value


*/ 



n = prompt("enter the number" , '')

Prime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) 
    continue Prime; // not a prime, go next i
  }

  alert( i ); // a prime
}













