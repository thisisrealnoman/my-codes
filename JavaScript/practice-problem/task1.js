// সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে FeetToInch এবং
// এই ফাংশন ইনপুট হিসেবে নিবে Feet আর রিটার্ন করবে Inch । 
// অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function FeetToInch(feet){
    const myResult = feet * 12;
    return myResult;
}

const myFeet = 6;
const isInch = FeetToInch(myFeet);
console.log(myFeet, 'feet =', isInch, 'inches');