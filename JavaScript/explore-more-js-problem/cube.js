function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Please enter a number!";
    }
    const result = number * number;
    return result;
}

const myNumber = 10;
const myResult = cubeNumber(myNumber);
console.log(myResult);