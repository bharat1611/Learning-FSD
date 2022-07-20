console.log("Working");
// AJAX for INtegrating GitHub API in the application

// To make a request to a server you need a XMLHttp Request(XHR)

// Step 1 -  Create the object of XHR

const xhr = new XMLHttpRequest();
//console.log("The first state : " + xhr.readyState);
const url = 'https://api.github.com/users';

//Step 2 - Open the portal of communication bw the client and the server

// xhr.open(HTTPMethod, urlOfTheAPI)

//HTTP Methods - GET - Read data from the server
// POST - write in the server(Sign UP)
// Put - edit something in the server(Change number)
// Patch - Edit your primary key(related to database)
// Delete - Delete something in the server

xhr.open('GET', url)
//console.log("The second state : " +xhr.readyState);

//Step 3 - Keep track of the state-change
xhr.onreadystatechange = () => {
   //console.log("The third state : " +xhr.readyState);
    //Step 4 = Check if readyState is 4 and Status is 200
    if(xhr.readyState == 4 && xhr.status == 200){
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        //console.log(xhr.responseText);
        for(let i = 0; i< 30; i++)
        {
        const image = document.createElement('img');
        image.src = response[i].avatar_url;
        console.log(image);
        
        const para = document.createElement('p');
        para.className = 'lead';
        para.innerHTML =`<b>${response[i].login}</b>`;
        para.style.textAlign = 'center';
        console.log(para);

        const br = document.createElement('br')
        const h = document.createElement('hr');
        h.setAttribute('width','100px');
        const box = document.getElementById('main');
        box.appendChild(image);
        box.appendChild(para);
        box.appendChild(br);
        box.appendChild(h);
        }

    }
}
// check HTTP response status codes (Website)

//Step 5 - Send the request
xhr.send();


