// POWER : 3^8
const result = Math.pow(3, 8);
// console.log(result);

// ---------------------------------------------------

// absolute value
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// gap = Math.abs(gap);
// console.log(gap);

if(gap < 5){
    console.log("You guys can be friend");
}
else{
    console.log("you guys stay apart");
}

// ---------------------------------------------------

//round figure
const number1 = 2.45789;
const number2 = 2.556699;   //5 or greater than 5 goes to upward

const fullNumber = Math.round(number1);
const fullNumber2 = Math.round(number2);
console.log(fullNumber);
console.log(fullNumber2); //5 or greater than 5 goes to upward


// round figure : ceil (UPWARD)
const resultUpward = Math.ceil(2.000001);
console.log("Upward: ", resultUpward);


// round figure : floor (downward)
const resultDownward = Math.floor(2.99999);
console.log("Downward: ", resultDownward);


// ---------------------------------------------------

//random number (0 to 1)
// console.log(Math.random());

//random number 1 to 100
// const randomOneToHundred = Math.random()*100;
const randomOneToHundred = Math.round(Math.random()*100);
console.log(randomOneToHundred);


// while(1){
//     console.log(Math.random());
// }