/* তোমাকে যদি বলা হয়। একটা Array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে 
সেগুলাকে Console Log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড
করে ফেলো  */

const myArray = [10, 233, 58, 34789, 89, 56, 8989, 99];

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] < 80){
        continue;
    }
    console.log(myArray[i]);
}