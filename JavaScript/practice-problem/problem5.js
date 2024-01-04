/* 
তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে।
তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন
একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা।
যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/

const number1 = 1;
const number2 = 2;
const number3 = 3;
if(number1 < number2 && number1 < number3){
    console.log("number 1 is little");
}

if(number1 < number3 || number3 < number2){
    console.log("OR operation");
}