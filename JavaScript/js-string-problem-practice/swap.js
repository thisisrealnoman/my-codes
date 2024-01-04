let firstNumber = 10;
let secondNumber = 2;
console.log("before exchange: ", firstNumber, secondNumber);
// // approach:1
// let temp = firstNumber;
// firstNumber = secondNumber;
// secondNumber = temp;
// console.log("after exchange: ", firstNumber, secondNumber);

// approach:2 --- Destructuring

[ firstNumber, secondNumber ] = [ secondNumber, firstNumber ];
console.log(firstNumber, secondNumber);