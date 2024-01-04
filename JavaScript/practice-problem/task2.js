// একদম ফাংশন এর নাম হুবহু CentimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
//  এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার 
//  এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function CentimeterToMeter(cm){
    isMeter = cm / 100;
    return isMeter;
}

myCentimeter = 10;
myMeter = CentimeterToMeter(myCentimeter);
console.log(myMeter);