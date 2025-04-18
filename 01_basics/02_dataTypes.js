// "use strict" // treat all js code as newer version
// alert("hello") // error in node envirnment, for alert it should bind with html or run on browser

let name = "Mahima" // string data type
const age = 23;  // number type
let isLoggedIn = true
let course; // undefined, we dont have value
let address = null //null is object type, space created but recently we take address as null to store data later, 
// null is standalone value  / empty
let fees = 2n ** 59n // bigInt bcs value > 2^53 ^ it's use for OR not Exponentiation

let myId = Symbol(id = "1") // symbol is used for uniqeness, like when we create multiple components 
// then use symbol to differentiat that a component is unique from another component
console.table([typeof name, typeof age, typeof isLoggedIn,typeof course, typeof address, typeof fees], typeof myId)