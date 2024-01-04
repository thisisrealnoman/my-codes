/* তোমাকে যদি বলা হয় তুমি একটা Array ডিক্লেয়ার করবে।
এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
সেই Array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে।
Array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের
করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */

const myArray = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];

const arrLen = myArray.length;
console.log("Array length:", arrLen);

myArray[3] = 'tutTutTut';
console.log(myArray);

myArray.push('Thursday', 'Friday');
console.log(myArray);

myArray.pop();
console.log(myArray);


// problem 9

for(let i = 0; i < myArray.length; i++){
    arrayIndex = i;
    arrayElement = myArray[arrayIndex];
    console.log(arrayElement);
}