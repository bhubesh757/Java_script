// object oriented programming  oops in javascript

//  example
const  userone = {
    name: 'bhubesh',
    email : 'bhubesh2k19@gmail.com',
    age: 18,
    login(){
        console.log("bhubesh has logged in succesfully")
    
    },
    logout(){
        console.log("bhubesh has logged out!")
    },
}
userone.login()


// by defining another user

// this method , whihc ist he owner of the method
// use inside the class 

class User {
    constructor(name , age , email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
    }

    login(){
        console.log(`${this.name} has logged in succesfully`)
    }
    logout(){
        console.log(`${this.name} has logged out`)
    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`)

    }

}


let user1 = new user("bhubesh" , 18, "bhubesh2k19@gmail.com")
user1.login()
let user2 = new user ("charan" ,19."charancv@gmail.com" )
user2.login()
user1.addcoins();


// use another method to short form the code<> 



class User {
    constructor(name , age , email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.courses = []; 
    }

    login(){
        console.log(`${this.name} has logged in succesfully`)
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`)
        return this;
    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`)
        return this;

    }

}


class Moderator extends User{
    // constructor((name , age , email , role)){
    //     super(name , age , email );
    //     this.role = 'Moderator'
    // }    // subclasses 

    deleteUser(user){
        users = users.filter(u=> {
            return u.email = ! user.email;

        })
        
        
        }
class Admin extends Moderator{
    addcourse(user , course){
        user.courses.push(course);
        console.log(user);
    }
}

}
let user1 = new user("bhubesh" , 18 , "bhubesh2k19@gmail.com")
let user2 = new user ("charan" ,19,"charancv@gmail.com" )

// user1.login().addcoins().logout();
let admin = new Admin("stephen" , 18 , "stephen2k19@gmail.com")
let mod = new Moderator("karan" , 18, "karan2k19@gmail.com")
let users = [user1 , user2,mod,admin]

users.forEach(element=>{
    console.group(element)
});
admin.addcourse(user1 , "javascript");
admin.addcourse(user1 , "blockchain");



// static
greet(){
    console.log("hello javascript")
}

user1.greet()
