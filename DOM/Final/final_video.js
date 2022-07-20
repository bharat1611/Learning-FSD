
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// FORM SUBMIT EVENT
form.addEventListener('submit',addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

// ADD Item
function addItem(e)
{
    e.preventDefault();
    console.log(1);

    // Get input Value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    // ADD Text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element for child
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append Button to li
    li.appendChild(deleteBtn);

    // Append li to ListItem
    itemList.appendChild(li);

}

// Remove Item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure ? ')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }   
}

//Filter Items
function filterItems(e)
{
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    //Convert items to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}