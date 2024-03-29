/* দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো।
অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা
ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো।
একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। */

const number1 = 40;
const number2 = 23;

const sum = number1 + number2;
const difference = number1 - number2;
const multiplication = number1 * number2;
let division = number1 / number2;
const remainder = number1 % number2;

division = division.toFixed(2);
division = parseFloat(division);

console.log("Sum", sum);
console.log("Sub", difference);
console.log("Mul", multiplication);
console.log("Div", division);
console.log("Rem", remainder);