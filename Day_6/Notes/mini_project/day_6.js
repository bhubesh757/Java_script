// 
// mini project of the javascript

const text = document.getElementById('id')
const button = document.getElementById('btn');

button.onclick = ()=>{
    if(text.className == 'show'){
        text.className = '';
        button.innerText = "read less";

    }else{
        text..className = 'show'
        button.innerText = "read more";
    }
}

