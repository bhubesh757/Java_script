// Async Await  // async tell that it runs in the backgound , await tells thats , until the aync is executed it waits
// definition 
// async is a function which helps to write the code for promises,
// without blocking the code, js will automatically wraps and resolved promise with its value
// await


const photos = [];
function photoupload(){
    let status  = new Promise((resolve , reject)=>{
        setTimeout(()=>{
             photos.push('doraemon');
             resolve("profile updated successfully");
        },3000)
    })
    let result = status;
    console.log(result)
} 

const photos = [];
function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('doraemon');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(photos.length);
}


photoupload();
photoupload();
