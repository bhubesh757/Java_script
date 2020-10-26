// function validate() {

//     var username = document.getElementById('name');
//     var password = document.getElementById('pwd');

//     if(username.value == "" || password.value == "")
//     {
//         alert('No blank values are allowed');
//         return false;
//     }
//     else{

//         true;
//     }
    
// }


function validate(){

    var name = document.getElementById('name');
    var password = document.getElementById('pwd');


    if(name.value.trim()=="")
    {
        alert('Blank Username');
        name.style.border = 'solid 3px yellow'
        return false;
    }

    else if (pwd.value.trim()== ""){
        alert('Blank Password')
        return false;

    }

    else if (pwd.value.trim().length <5)
    {
        alert("Password is Too short atleast give 8 characters")
        return false;
    }

    else{
        return true;
    }
}

