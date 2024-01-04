// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে BestFriend তারপর সেই ফাংশনে 
// ইনপুট প্যারামিটার হিসেবে একটা Array নিবে। সেই Array এর মধ্যে তোমার সব 
// ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই 
// ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) 
// রিটার্ন করতে হবে। 

function BestFriend(array){
    if(array[0].length > array.length[1] && array[0].length > array[2].length){
        return array[0];
    }
    if(array[1].length > array.length[0] && array[1].length > array[2].length){
        return array[1];
    }
    else{
        return array[2];
    }
}

const myFriends = ['apple', 'banana', 'watermelon'];
const longestName = BestFriend(myFriends);

console.log(longestName);