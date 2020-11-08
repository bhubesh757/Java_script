const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
var filter = document.getElementById('filter');

// AddListItem
form.addEventListener('submit' , addItem);
// delete list
itemList.addEventListener('click' , deleteItem);
// filter Event
filter.addEventListener('keyup',filterItems)


function addItem(e){
    e.preventDefault();
    
    
    var newItem = document.getElementById('item').value;
    
    // createElement
    
    var li = document.createElement('li')
    li.className = 'list-group-item'
    // console.log(li);

    // append the text

    var text = document.createTextNode(newItem);
    li.appendChild(text);
    
    // delete btn

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // apeend the node

    var x = document.createTextNode('X')
    deleteBtn.appendChild(x)

    li.appendChild(deleteBtn)


    // appending the li to itemlist
    
    itemList.appendChild(li);

    itemList.appendChild(li);



    // Removing the item


}

function deleteItem(e){
    // e.preventDefault();
    // console.log(1);

    if(e.target.classList.contains('delete')){
        // console.log(e.target.classList.contains('submit'));
        if(confirm('Are you sure To remove')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            // console.log(e.target.parentElement);
            // console.log(e.target);
        }
    }
}

function filterItems(e){
    // convert text to lowercase

    var text = e.target.value.toLowerCase();
    console.log(text);
    // console.log(e.target.value);

   var items =  itemList.getElementsByTagName('li');
   console.log(items);   
//    converts into an array

    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // console.log(item.firstChild.textContent);
    // console.log(item.firstChild);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        // console.log(itemName.toLowerCase().indexOf(text));
        console.log(indexOf(text));
    }
    else{
        item.style.display = 'none'
    }
});
}