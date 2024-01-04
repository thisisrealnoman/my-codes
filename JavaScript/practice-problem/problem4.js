/* তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো।
কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা
সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান।
এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো।
তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড
লিখে ফেলো। */

const number1 = 17;
const number2 = 12;

if(number1 > number2){
    console.log("number1 is greater than number2");
}
if(number1 < number2){
    console.log("number1 is less than number2");
}
if(number1 === number2){
    console.log("number1 is equal to number2");
}
if(number1 !== number2){
    console.log("number1 is not equal to number2");
}
if(number1 <= number2){
    console.log("number1 is less than or equal to number2");
}
if(number1 >= number2){
    console.log("number1 is greater than or equal to number2");
}