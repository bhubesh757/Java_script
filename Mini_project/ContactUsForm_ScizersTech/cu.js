function validation(){
    var name = document.getElementById("name").Value;
    var phone = document.getElementById("phone").Value;
    var email = document.getElementById("email").Value;
    var message = document.getElementById("message").Value;
    var error_message = document.getElementById("error_message").Value;
    

    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
        text = "Enter the Valid Name"
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone)|| phone.length !=10){
        text = "Enter the Valid Phone Number"
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexof("@") == -1 || email.length < 6){
        text = "Enter the Valid MailId"
        error_message.innerHTML = text;
        return false; 
    }
  
    if(message.length <= 100){
        text = "Please Enter More Than 100 Words"
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;

}
