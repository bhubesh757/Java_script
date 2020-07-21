// promises

// promises?
let Users = [{
    name = "bhubesh",
    email = "bhubesh2k19@gmail.com",
},
{
    name = "charan",
    email = "charan@gmail.com",
},
{
    name = "karan",
    email = "karan@gmail.com",
}

]

function getUsers(){
    setTimeout(()=>{
        let result = ''
        users.forEach(user=>{
            result + = `the user is ${user.name}`;
        })
        console.log(result)

    },1000);
}

getUsers()

// promises

function createUser(){
    return new promise(resolve , reject)=>{

        setTimeout(()=>{
            users.push(user);

            const error = false;

            if (error){
                resolve();

            }else{
                PromiseRejectionEvent("oops an erroe occcured")
            }
        },3000)


    }
    
}

// example two

const userdata = new promise((resolve , reject)=>{
    const error = true;

    if (error){
        reject('an erroe occured ');

    }else{
        resolve({

            firstname : "roy",
            age:18,
            class : "college",

        })
    }
})
userdata
    .then(data=> console.log(data))
    .catch(error => console.log(error))
