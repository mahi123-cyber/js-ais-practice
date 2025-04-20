let score = 33;
console.log(typeof score);

 let score1 = "33";
 console.log(typeof score1)

 let convertIntoNum = Number(score1)
 console.log(typeof convertIntoNum);


 let score3 = "33abc"
 console.log(typeof score3, score3)

 let convertIntoNum2 = Number(score3)
 console.log(typeof convertIntoNum2, convertIntoNum2)

 let score4 = null
 console.log(score4, typeof score4)

 let convertIntoNum3 = Number(score4)
 console.log(convertIntoNum3, typeof convertIntoNum3) // null conveted into 0 when number type

 let score5 = undefined;
 console.log(score5, typeof score5)

 let convertIntoNum4 = Number(score5)
 console.log(convertIntoNum4, typeof convertIntoNum4)

 let score6 = true
 let score7 = false
 let convertIntoNum5 = Number(score6)
 let convertIntoNum6 = Number(score7)

 console.log(typeof convertIntoNum5, convertIntoNum5 )
 console.log(typeof convertIntoNum6, convertIntoNum6 )

 let score8 = 1  // for "" or undefined conversion is false and for "Mahima" conversion is true
 let convertIntoNum7 =Boolean(score8)
 console.log(convertIntoNum7)

 let score9 =33;
 let convertIntoNum8 = String(score9)
 console.log(typeof convertIntoNum8, convertIntoNum8)

// ************************************ Operations *******************************************************

let value =3;
let negValue =-value
console.log(negValue)

console.log(2+2, 2-2,2*2,2/2,2%2,2**2,2^2)
let str1 = "Mahima";
let str2 = " Soni";
console.log(str1+str2)

//if start with String, then all coming numbers are concatenate but not addition opeations
console.log("1"+2+3+4)

//if start with number, then all coming numbers are perform addition and
//  concatinate if any string coming and after that string only concatenation not addtitio 
console.log(1+2+4+5+"3"+4+5)

//others

console.log(true)
console.log(+true)
console.log(+"")

let num1=num2=num3=45;
console.log(num1,num2,num3)

//prefix value increment imediatly, postfix value inc after uses

let gameCounter = 45;
console.log(gameCounter++)
console.log(++gameCounter)