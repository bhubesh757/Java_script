// Promises
// Callbacks
// Async and Await


// ----------------------XXX------------------------------


// Callbacks function
// What is it?

// const posts = [
//     {title : 'Post One ' , body: 'this is Post One'},
//     {title : 'Post Two ' ,body :' this is Post two'}
// ]


// function getposts(){
//     setTimeout(() => {

//         let output = '';
//         posts.forEach( (post) =>{
//              output += ` <li> ${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000)


// }
//        function createPost(post ,callback){
//             setTimeout(()=>{
//                 posts.push(post);
//                 callback();
//             },2000)
//         }


// getposts();

// createPost({
//     title : 'Post Three' , body :"this is post three"
// },getposts);

// -----------------------------X----------------------------


// Promises


const posts = [
    {title : 'Post One ' , body: 'this is Post One'},
    {title : 'Post Two ' ,body :' this is Post two'}
]


function getposts(){
    setTimeout(() => {

        let output = '';
        posts.forEach( (post) =>{
             output += ` <li> ${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },2000)


}
       function createPost(post){

        return new Promise((resolve , reject) =>{
            setTimeout(()=>{
                posts.push(post);

                const error = false;

                if(!error){
                    resolve();
                }
                else{
                    reject('Its an Error amd Somthing went wrong ')
                }

            },3000)
            
        })

 }

//  createPost({
//      title :'post three' , body :' this is post three'
//  }).then(getposts)
//  .catch(err => console.log(err));

// more about pomises

// const Promise1 = Promise.resolve('Hey world');
// const promise2 = 10;
// const promise3 = new  Promise ((resolve , reject) => 
// )


// --------------------------xxx----------------------


// Async and await


async function init(){
    await createPost({
        title :'Post three' , body :'this is post three'
    });

    getposts();
};
init();


