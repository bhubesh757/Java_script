function animatedForm(){
      const arrows = document.querySelectorAll(".fas fa-arrow-down");


      arrows.forEach((arrow) => {
              arrow.addEventListener('click', (arrow) => {
                  const input = arrow.previousElementSibling;
                  console.log(input);
                  const parent = arrow.parentElement;
                  console.log(parent);
                  const nextForm = parent.nextElementSibling;
                  console.log(nextForm);
                  //   console.log(input);
                  if (input.type === "text" && validateUser(input)) {
                      // console.log("Everything is Fine");
                      nextSlide(parent, nextForm);
                  }
                  else if (input.type === 'email' && validateEmail(input)) {
                      nextSlide(parent, nextSlide);
                  }
                  else if (input.type === 'password' && validateUser(input)) {
                      nextSlide(parent, nextForm);
                  }
                  else {
                      parent.style.animation = "shake 0.5s ease";
                  }
                  // get rid of the animation
                  parent.addEventListener('animationend', () => {
                      parent.style.animation = '';
                  });
              });
          });
}

// User Validation

function validateUser(user){
    if(user.value.length < 6){
        console.log("Invalid UserName");
        error(' rgb(189, 87, 87)');
    }
    else{
        error('rgb(87, 189, 130)');
        return true;
    }
}

// validation for email
function validateEmail(){
    const validation = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$';
    if(validation.test(email.value)){
        error('rgb(87, 189, 130)')
        return true;
    }
    else{
        error('rgb(189, 87, 87)')
    }
}


function nextSlide(parent , nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');

}


function  error(color) { 
    document.body.style.backgroundColor = color;
 }

 animatedForm();