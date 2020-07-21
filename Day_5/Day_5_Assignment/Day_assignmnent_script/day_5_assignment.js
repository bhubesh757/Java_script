// question 1

let arr = prompt("enter your numbers ").split(",")
console.log(arr)

// let arr = [];
// for (let i = 0 , i < 5 , i++)
//     arr.push(prompt("enter a number"))

arr1 = arr;
// using high order function

let odd = arr1.filter(x=>x%2!==0);
console.log(`the odd number from the given list ${odd}`)

let oddcube = arr1.filter(x=>x%2!== 0).map(x=>x**3)
console.log(`the  cuberoot from the given list ${oddcube}`)

console.log(odd);
console.log(oddcube);



// question 2

class user{
    constructor(name, age , email){
    this.name = name;
    this.age  =  age ;
    this.email = email;
    this.luCoins = 0;
    this.courses = [];

}

login(){
    console.log(`${this.name} has logged in`);
    return this;
}
logout(){
    console.log(`${this.name} has logged out`);
    return this;
}
addCoins(){
    this.luCoins++;
    console.log(`${this.name} has ${this.luCoins} coins`);
    return this;
}
getDetails(){
    console.log(`Name is ${this.name}, email is ${this.email}`);
    return this;
}

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('bhubesh',18,'bhubesh2k19@gmail.com')
let user2 = new User('charan',24,'charan@gmai.com')
let mod = new Moderator('kaviya',24,'kaviya@gmail.com','Moderator');
let admin = new Admin('shobika',25,'shobika@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


// question 3

async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchtodos();


let obj1 = {
    name:'bhubesh',
    age:18,
    mail : "bhubesh2k19@gmail.com",
}

console.log(obj1);
let x = JSON.stringify(obj1);   // stringify uses to convert the string to the json string
console.log(x)

let x1 = JSON.parse(str);
console.log(x1)