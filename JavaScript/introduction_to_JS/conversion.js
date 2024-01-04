// here 35, 10 are strings 
var price1 = '35';
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

// one numeric variable + one string , it will still concat them
// eg. 1 -----------
var price1 = 35;
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

// eg. 2 -----------
var price1 = '35';
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice);


// ----------- CONVERT STRING TO NUMBER ------------
console.log(price1);
var price1Number = parseInt(price1);
console.log(price1Number);

// STRING TO FLOAT-NUMBER 
var gpa = "3.66";
console.log(gpa);
gpa = parseFloat(gpa);
console.log(gpa);