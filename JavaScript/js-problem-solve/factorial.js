//1*2*3*4.....*n

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const myResult = factorial(10);
console.log(myResult);

//factorial in reverse way

function reverseFactorial(num) {
    let resultValue = 1;
    for (let j = num; j >= 1; j--) {
        resultValue = resultValue * j;
    }
    return resultValue;
}

const result = reverseFactorial(10);
console.log(result);