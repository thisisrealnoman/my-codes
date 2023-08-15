function factorial(number){

    let result = 1;
    let num = 1;

    while(num <= number){
        result = result * num;
        num++;
    }

    return result;
}

const value = 10;
const resultOfFact = factorial(value);
console.log('Factorial of 10 is =', resultOfFact);