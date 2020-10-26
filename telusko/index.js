function fn1() {
    let rd1 = document.getElementById("rd1");
    let rd2 = document.getElementById("rd2");

    if (rd1.checked == true) {
        alert('The name is selected is :'+rd1.value);
    }
    else if (rd2.checked == true){
        alert('the name is selected is :' + rd2.value)
    }
    else
    alert('nothing is selected')
    
}
fn1()


SelectBox

function fn1(){
    var select = document.getElementById('select');
    alert(select.options[select.selectedIndex].value)
}

fn1()


function changestyle(){
    var e = document.getElementsByClassName('test')

   for (let i = 0; i < e.length; i++) {

       e[x].style.color = 'yellow';
   }
}