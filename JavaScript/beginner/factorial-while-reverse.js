function factorial(number){

    let result = 1;

    let num = number;
    while(num >= 1){
        result = result * num;
        num--;
    }

    return result;
}

const value = 10;
const resultOfFactorial = factorial(value);
console.log('10! =', resultOfFactorial);