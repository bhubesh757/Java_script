let superheroes = [

    {
        name: "bhubesh",
        age : 18,
        planet : "earth",
        height : "5.9"

    },
    {
        name: "charan",
        age : 19,
        planet : "mars",
        height : "5.6"
    },
    {
        name: "karan",
        age : 17,
        planet : "venus",
        height : "5.7"
    },

]; 

function display(superarray , index){
    // create a string
    let tabledata = "";
    let srno = 1;
    superarray.forEach(function(superhero){
        let currentrow = `<tr>
        <td>${srno}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.planet}</td>
        <td>${superhero.height}</td>
        <td>
        <button onclick='deleteSuperhero(${index})'>delete</button>
        <button onclick='showModal(${index})'>update</button>
        
        </td>
        </tr>`;
        tabledata += currentrow; // tabledata = tabledata + currentrow
        srno++;
    });

     document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //  document.getElementById('tdata').innerHTML = tabledata;

}


display(superheroes);

function addSuperhero(event){
    event.preventDefault();
    let superhero = {};
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let planet = document.getElementById('planet').value;
    let height = document.getElementById('height').value;

    superhero.name = name;
    superhero.age  = Number(age);
    superhero.planet = planet;
    superhero.height = height;


    superheroes.push(superhero); // push is iinbuilt function and what it does ? it push towards the data which is already stored
    // console.log(superheroes);
    display(superheroes);

     document.getElementById('name').value ="";
     document.getElementById('age').value="";
     document.getElementById('planet').value="";
     document.getElementById('height').value="";

}

function searchByName(){
    let searchValue = document.getElementById("searchName").value;
    
    let newdata = superheroes.filter(function(superhero){
        return superhero.name.indexOf(searchValue)!=-1;
    });
   display(newdata);
}


function deleteSuperhero(index){

    superheroes.splice(index , 1);
    display(superheroes);
}

let updateIndex;

function copySuperhero(index) {
    updateIndex = index;
    console.log(updateIndex);
    
    let superhero = superheroes[index];
  
    document.getElementById("upname").value = superhero.name;
    document.getElementById("upage").value = superhero.age;
    document.getElementById("upplanet").value = superhero.planet;
    document.getElementById("upheight").value = superhero.height;
  }

  

  function updateSuperhero(event){


    event.preventDefault();
    let superhero = superheroes[updateIndex];
    console.log(superhero);
    let name = document.getElementById('upname').value;
    let age = document.getElementById('upage').value;
    let planet = document.getElementById('upplanet').value;
    let height = document.getElementById('upheight').value;

    superhero.name = name;
    superhero.age  = Number(age);
    superhero.planet = planet;
    superhero.height = height;

    console.log(superhero);

    superheroes.push(superhero); // push is iinbuilt function and what it does ? it push towards the data which is already stored
    // console.log(superheroes);
    display(superheroes);

  }
