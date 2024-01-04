function getFactorial(number){
    let result = 1;
    let i = 1;
    while(i <= number){
        result = result * i;
        i++;
    }
    return result;
}

const myNumber = 17;
const output = getFactorial(myNumber);
console.log(output);