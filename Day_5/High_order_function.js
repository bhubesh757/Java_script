// day 5
// High order funtions(map, filter ,reduce )

// MAP function  also u can use foreach

let arr = [1,2,5,4,8];
arr.forEach((el)=>{
    console.log(el^^2)
}

// using arrow function
let square = arr.map((el)=>el**2)
console.log(square)

// without using arrow function

let square = arr.map(function(el){
    return el**2;
})
console.log(square);


// Filter

let even = arr.filter(el=>el%2 ==0);
console.log(even)

let evensquares = arr.filter
(el=> el%2==0).map(el=>el**2);
console.log(evensquares)


let users = [{"user": "👩🏻‍💻"},{"user": "👨🏾‍💻"},{"user": "💃"},{"user": "👨🏻‍🎓"},{"user": "🧑🏻‍🏫"},{"user": "🦸‍♂️"},{"user": "🧟‍♂️"}];
let resultdetails = users.map(user=>{
    let mark = Math.random()*100;
    user.mark = mark;
    return user;
})

console.log(resultdetails)


let pass = resultdetails.filter(user=>{
    if(user.mark>35){
        return user;
    }
})

console.log(pass)

// reduce function
// it reduces the array of the value to the single value, it pr
// provide some functions , where thwe function is stored in accumulator

let sum =arr.reduce((acc , val)=>{
    acc+= val
    return acc;

},0)

console.log(sum)  // 20