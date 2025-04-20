//primitive
// 7 types : String, Number, Boolean, Undefined, null, bigInt, Symbol
let score = 100;
let scoreValue = 100.33;
let isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const myId = Symbol('123');
console.log(id === myId)

const bigNumber = 12341234124n;

console.table([typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof bigNumber
])

//Reference (Non-Primitive data type): Array, Object, Functions, all non-primitive types data return type is object type

let heros = ["saktiman", "Dhanush", "Rajnikant"]   //array

//object within curly braces
let myObj = {
    name: "mahima soni",
    age: 20,
    course: "JavaScript"
}

//functions stored in a variable

let myFunction = function fun1(){

}
console.table([typeof heros, typeof myObj, typeof myFunction])