let score = "72"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "72" => 72
// "72abc" => NaN
//  true => 1; false => 0
//  null => 0
//  undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "komal" => true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// **************** Operation **************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(4/2);
console.log(2%2);

let str1 = "hello"
let str2 = " Kg"
let str3 = str1 + str2

console.log(str3);

console.log(2+2);
console.log("2"+2);
console.log(1+"2");
console.log("2"+2+4);
console.log(1+2+"6");
console.log( (3+2) * 4 % 2 );

console.log(true);    // true
console.log(+true);   // 1
console.log(+"");     // 0


let num1, num2, num3
 num1 = num2 = num3 = 3 + 3

 let gameCounter = 100
 ++gameCounter;
 console.log(gameCounter);

//  link to study
//  https://tc39.es/ecma262/2023/#sec-abstract-operations //
 
