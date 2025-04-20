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

