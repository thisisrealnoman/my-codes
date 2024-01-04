function feetToInch(feet){
    const myResult = feet * 12;
    return myResult;
}

const myFeet = 10;
const myInch = feetToInch(myFeet);
console.log(myInch);