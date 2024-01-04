const myArray = [10, 23, 24, 45, 21, 23, -45, 34, 35, 56];

function onlyPositive(numbers){
    let intNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number > 0){
            intNumbers.push(number);
        }
        else{
            break;
        }
    }
    return intNumbers;
}

const myPositiveNumber = onlyPositive(myArray);
console.log(myPositiveNumber);