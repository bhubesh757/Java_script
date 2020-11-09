// oops in javascript


// window.alert('hello');
// console.log(navigator.appVersion);
// // literals

oops in javascript


window.alert('hello');
console.log(navigator.appVersion);
// literals


const book1 = {
    title : 'wingsoffire',
    author : 'apj abdul kalam',
    year : '1947',
    getSummary : function() {
        return `${this.title} nd the author is ${this.author} `
    }
};

console.log(book1.getSummary());


console.log(Object.values(book1));



Constructors in javascript


function Book(title,author,year) {
    // console.log('Book Initialized!!');

    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `the name of the book is ${this.title} and it was written by ${this.author} and i
        t was published on ${this.year}..`
    }
}

// another way
// Getting a prototype

Book.prototype.getSummary = function(){
        return `the name of this is ${this.title} and it was written by ${this.author} and i
        t was published on ${this.year}..`
}
// if you are console this the getSummary goes and gets saved in the proto object not in the object

// Revise chnage year

Book.prototype.revise = function(newYear){

    this.year = year;
    this.revised = true;
}


// instatiate an object;
const book1 = new Book('wings of fire','apj' ,"1982" );
const book2 = new Book('the white tiger','aravind' ,"1975" );
const book3 = new Book('a suitable boy','vikram seth' ,"1993" );
// const book2 = new Book();

// console.log(book1);
// console.log(book2);
// console.log(book3.author);

// Lets get the summmary of the book 

console.log(book2.getSummary());


// for revise

book3.revise = '2020'
console.log(book3);



----------------------------------------------X------------------------------------------
Inheritance


from the above book




function Magazine (title , author , year , month){
    Book.call(this , title , author , year);

    this.month = month;
}

//  Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype);

const Magazine1 = new Magazine('india today' , "india" , "2020" , "november" )
const Magazine2 = new Magazine('Business today' , "the hindu" , "2020" , "october" )
const Magazine3 = new Magazine('outlook' , "none" , "2020" , "december" )

// Lets use the magazine constructor;

Magazine.prototype.constructor = Magazine;

// console.log(Magazine1.getSummary());

console.log(Magazine1);


----------------------------------------X----------------------------------------------


Object.create explanation

create an object
Object of Protos


const bookProtos = {
    getSummary: function(){
        return `the name of this is ${this.title} and it was written by ${this.author} and i
        t was published on ${this.year}..`
    },

    getAge : function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}


Create an Object

const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'apj';
book1.year ='1935';


// Another way of doing this

const book2  = Object.create(bookProtos , {
    title : { value : 'Book Two'},
    author : {value : ' apj2'},
    year : { value : '1988'}
})

console.log(book1);
console.log(book2.getAge());

// --------------X------------------------------





in ES5
function Book(title , author , year ){
            this.title  = title;
            this.author = author;
            this.year = year;
}

ES6 classes 


// -----------------------comparing the ES6 and ES5-----------------------
class Book {
    constructor(title , author , year){
        this.title  = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
              return `the name of this is ${this.title} and it was written by ${this.author} and i
              t was published on ${this.year}..`;
  
  }
};
// comparison



// Instantiate Object

const book1 = new Book('book one ' , 'apj ' , '1966');

console.log(book1.author);


Static method in classes 

----------------------XX---------------------------

subclasses


let extend the class from book to magazine

Magazine Class

class Magazine extends Book {

        constructor(title , author , year , month){
            // this.title = title;
            // this.author = author;
            // this.month = month;
            super(title , author , year , month)
            // instead of doing this let use super keyword ot grab the elements from the book class
            this.month = month;
        }
}


const mag1 = new Magazine('hey dude' , 'fik' , "7845")

console.log(mag1);

// const book1 = {
//     title : 'wingsoffire',
//     author : 'apj abdul kalam',
//     year : '1947',
//     getSummary : function() {
//         return `${this.title} nd the author is ${this.author} `
//     }
// };

// console.log(book1.getSummary());


// console.log(Object.values(book1));



// Constructors in javascript


// function Book(title,author,year) {
//     // console.log('Book Initialized!!');

//     this.title = title;
//     this.author = author;
//     this.year = year;

    // this.getSummary = function(){
    //     return `the name of the book is ${this.title} and it was written by ${this.author} and i
    //     t was published on ${this.year}..`
    // }
// }

// // another way
// // Getting a prototype

// Book.prototype.getSummary = function(){
//         return `the name of this is ${this.title} and it was written by ${this.author} and i
//         t was published on ${this.year}..`
// }
// // if you are console this the getSummary goes and gets saved in the proto object not in the object

// // Revise chnage year

// Book.prototype.revise = function(newYear){

//     this.year = year;
//     this.revised = true;
// }


// // instatiate an object;
// const book1 = new Book('wings of fire','apj' ,"1982" );
// const book2 = new Book('the white tiger','aravind' ,"1975" );
// const book3 = new Book('a suitable boy','vikram seth' ,"1993" );
// // const book2 = new Book();

// // console.log(book1);
// // console.log(book2);
// // console.log(book3.author);

// // Lets get the summmary of the book 

// console.log(book2.getSummary());


// // for revise

// book3.revise = '2020'
// console.log(book3);



// ----------------------------------------------X------------------------------------------
// Inheritance


// from the above book




// function Magazine (title , author , year , month){
//     Book.call(this , title , author , year);

//     this.month = month;
// }

// //  Inherit Prototype 
// Magazine.prototype = Object.create(Book.prototype);

// const Magazine1 = new Magazine('india today' , "india" , "2020" , "november" )
// const Magazine2 = new Magazine('Business today' , "the hindu" , "2020" , "october" )
// const Magazine3 = new Magazine('outlook' , "none" , "2020" , "december" )

// // Lets use the magazine constructor;

// Magazine.prototype.constructor = Magazine;

// // console.log(Magazine1.getSummary());

// console.log(Magazine1);


// ----------------------------------------X----------------------------------------------


// Object.create explanation

// create an object
// Object of Protos


// const bookProtos = {
//     getSummary: function(){
//         return `the name of this is ${this.title} and it was written by ${this.author} and i
//         t was published on ${this.year}..`
//     },

//     getAge : function(){
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// }


// Create an Object

// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'apj';
// book1.year ='1935';


// // Another way of doing this

// const book2  = Object.create(bookProtos , {
//     title : { value : 'Book Two'},
//     author : {value : ' apj2'},
//     year : { value : '1988'}
// })

// console.log(book1);
// console.log(book2.getAge());

// // --------------X------------------------------





// in ES5
// function Book(title , author , year ){
//             this.title  = title;
//             this.author = author;
//             this.year = year;
// }

// ES6 classes 


// -----------------------comparing the ES6 and ES5-----------------------
class Book {
    constructor(title , author , year){
        this.title  = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
              return `the name of this is ${this.title} and it was written by ${this.author} and i
              t was published on ${this.year}..`;
  
  }
};
// comparison



// Instantiate Object

const book1 = new Book('book one ' , 'apj ' , '1966');

console.log(book1.author);


// Static method in classes 

// ----------------------XX---------------------------

// subclasses


// let extend the class from book to magazine

// Magazine Class

class Magazine extends Book {

        constructor(title , author , year , month){
            // this.title = title;
            // this.author = author;
            // this.month = month;
            super(title , author , year , month)
            // instead of doing this let use super keyword ot grab the elements from the book class
            this.month = month;
        }
}


const mag1 = new Magazine('hey dude' , 'fik' , "7845")

console.log(mag1);
