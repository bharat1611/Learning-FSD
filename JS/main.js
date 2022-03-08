
// Displaying things to the user

// console.log("Hello")
// alert("Alert Occured")
// console.warn("This is a warning")
// console.error("This is an error")

// JS BASICS

// Variables and Constants

// Data types 
    // Primitive Data Type - Number, string, boolean, null and undefined & symbols(no one uses symbols)

    // a=10.23
    // b='Technology'
    // c=true
    // d=undefined
    // e=null

    // console.log(typeof a)
    // console.log(typeof b)
    // console.log(typeof c)
    // console.log(typeof d)
    // console.log(typeof e)

// Declaration of a variable - let, var, const(ES6)

// 1. var keyword is global in nature.
// 2. let(ES6) keyword is used for scoping

// var anyValue="Hi, something"
// console.log(anyValue);

// let anotherValue=25;
// console.log(anotherValue);

// const blah ='Bharat'
// blah='Blah'     - Throws error cause const cannot be changed.
// cannot just declare a const variable, have to define it too.

// console.log(b)

// // String and String Methods
// const str="javascript"
// // Find the length
// console.log(str.length)
// //Change the case of the string
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// // sub-string
// console.log(str.substr(3,4))
// console.log(str.substring(3,10))

// str1="Java,Split,kotlin,timepass, timepass 1"
// console.log(str1.split(","))

//Arrays In Java

// const course=['Data Science', 10,20, true, null];
// console.log(course);

//Objects in JS - { key : value }
const user = {
    firstName: "Bharat",
    lastName: "Upadhyay",
    age: "21",

    //Include arrays inside object
    hobbies: ['art', 'roaming', 'adventure'],

    //Inlcude objects inside object
    address: {
        street: "A-16",
        locality: "KhurramNagar",
        city:"Lucknow"
    }
}

console.log(user);

//Access values from the object
console.log (`Hi my name is ${user.firstName} ${user.lastName}. My hobbies are ${user.hobbies[0]} and ${user.hobbies[2]}. I live in ${user.address.street} ${user.address.locality}, ${user.address.city}`)

//Array of Objects => [{}, {}, {}]

//Conditions
if(5 < 10)
    console.log('5 is less than 10')
else
    console.log('5 is greater than 10')

// Shorthand - condition ? true : false
5 < 10 ? console.log("5 is less than 10") : console.log('5 is greater than 10')

const ans= 10 / 0;
console.log(ans)

const ans1 = 20 / "blah"
console.log(ans1)

const ans2 = 'yo'/'blah'
console.log(ans2)

// JSON - JS Object Notation
// stringify()
const jsonData = JSON.stringify(user)
console.log(jsonData)

// parse{} - Convert JSON into ArrayOfObjects
const arrayOfObjects = JSON.parse(jsonData)
console.log(arrayOfObjects);

// var, let and const
// age>30 - half the age : double the age

// let, const - local scope - not accessible outside the block
// var - global scope


const age = 30;
if(age > 30){
   let newAge=age/2;
    console.log(newAge)
}
else{
    let newAge = age * 2;
    console.log(newAge);
}

// console.log(newAge)  - error coz not accessbile outside

// LOOPS 
// 1. Basic Loops - for() and while()

for(let i = 1; i<=10 ; i++)
    console.log("Value is ", i);



// 5 ki table

for(let i=1;i<=10;i++)
    console.log(" 5 * ", i, " = ", 5*i)





