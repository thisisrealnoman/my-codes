// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);


function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log("Number is even.");
        return true;
    }
    else{
        // console.log("number is odd.");
        return false;
    }
}

const thisIsEvenNumber = isEven(46);
console.log(thisIsEvenNumber);

const thisIsOddNumber = isEven(13);
console.log(thisIsOddNumber);