// এইটা একটু ট্রিকি হতে পারে। একটা Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
// তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা 
// যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন 
// একটা Array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। 
// এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


function positiveNumbers(array){
    const somePosNum = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            break;
        }
        else{
            somePosNum.push(array[i]);
        }
    }
    return somePosNum;
}


const myNumbers = [1, 2, 3, 4, 5, -6, 7, 6, 7, 8];
const myPositiveNumbers = positiveNumbers(myNumbers);
console.log(myPositiveNumbers);

