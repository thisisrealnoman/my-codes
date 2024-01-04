// 1+2+3+4+5+6+7+8+9+10
function sumOfNumbers(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}

const myNumber = 10;
const sumOfMyNumbers = sumOfNumbers(myNumber);
console.log(sumOfMyNumbers);