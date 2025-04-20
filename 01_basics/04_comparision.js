console.log(2>1, 2>=1, 2<1, 2<=1, 2==1, 2===1, 2!=1)

// all operator using with string are covert string into number bydefault except plus operator
console.log("3"+2, "3"*2, '3'-2,'3'>2)

//null comparision <=, >= is return true, <,>return flse bcs comaprision operator convert null into number (0)
//  otherwise return false 

console.log(null>0, null >= 0, null<0, null<=0, null == 0)

// in case of undefined always false it's not converted into number

console.log(undefined>=0, undefined>0, undefined==0)

//=== strict check , == convert data type and check , but === not convert data type 
console.log("2"=== 2)
console.log("2"==2)