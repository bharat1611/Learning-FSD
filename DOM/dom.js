// EXAMINE the document object//

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title  = 123;
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);


// GET ELEMENT WITH ID 
// console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header= document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


// GetElement by ClassName //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = "grey";
// for(var i = 0; i< items.length;i++)
// {
//     items[i].style.backgroundColor = "grey";
// }

// GetElements BY Tag name // 


// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i< li.length;i++)
// {
//     li[i].style.backgroundColor = "grey";
// }


// QUERY Selector //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// Query Selector ALL - Grabs all the titles or elements together

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = "Hello";
// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for(var i = 0; i< odd.length ; i++)
// {
//     odd[i].style.backgroundColor = "#ccc";
//     even[i].style.backgroundColor = "#f4f4f4";
// }


// TRAVERSING IN DOM //
// var itemList = document.querySelector('#items');

// parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parent Element - Interchangeable with parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentElement.parentNode);

// childNodes
// console.log(itemList.childNodes);   // text Note - linebreak 

// console.log(itemList.children)    // No linebreaks and text note

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// //First Child  
// console.log(itemList.firstChild);   // Includes text

// // first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello1";

// //last Child  
// console.log(itemList.lastChild);   // Includes text

// // Last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello4";

// nextSibling
// console.log(itemList.nextSibling);    //Includes text
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //prevoiusSibling
// console.log(itemList.previousSibling);
// // previous ElementSIbling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = ' green'

//Create Elements and Insert them 

//Create element
// var newDiv = document.createElement('div')

// // Add class
// newDiv.className = "hello";

// // Add id
// newDiv.id = 'hello1';

// // Add Attribute
// newDiv.setAttribute('title', 'HelloDiv')

// // create text node
// var newDivText = document.createTextNode("helloWorld")
// // Add text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv , h1 )


// container.insertBefore(newDiv , null )
// newDiv.style.fontSize = '30px';


// console.log(newDiv)

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e)
{
    // document.getElementById('header-title').textContent = 'change';
    // document.querySelector('#main').style.backgroundColor = "#f4f4f4"
    // console.log("Button clicked");

    // console.log(e);

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    console.log(e.type);
}










