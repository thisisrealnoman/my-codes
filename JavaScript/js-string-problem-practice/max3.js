const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log("Jim will the cake.");
}

else if(dela > jim && dela > chinku){
    console.log("Dela will get the cake.");
}

else {
    console.log("Chinku will get the cake.")
}

// find min by if-else

if(jim < dela && jim < chinku){
    console.log("Jim got the min number.");
}

else if(dela < jim && dela < chinku){
    console.log("Dela got the min number.");
}

else {
    console.log("Chinku got the min number.")
}


// ------ Min , Max with function ------

// get max number
function maxNumber(num1, num2, num3){
    const result = Math.max(num1, num2, num3);
    return result;
}

const isMaxNumber = maxNumber(jim, dela, chinku);
console.log(isMaxNumber);

// get min number
function minNumber(num1, num2, num3){
    const myResult = Math.min(num1, num2, num3);
    return myResult;
}

const isMinNumber = minNumber(jim, dela, chinku);
console.log(isMinNumber);