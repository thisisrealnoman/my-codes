// summation of odd numbers from an array

/* function sumOfOddNumbers(numbers){
    let sum = 0;
    for(let i = 0; i < numbers. length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            sum = sum + element;
        }
    }
    return sum;
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myResult = sumOfOddNumbers(myNumbers);
console.log(myResult); */

// summation of odd numbers from an array by using multiple function

function getSumOfAnArray(newArrayNumbers){
    let sum = 0;
    for(let j = 0; j < newArrayNumbers.length; j++){
        const anotherIndex = j;
        const anotherElement = newArrayNumbers[anotherIndex];
        sum = sum + anotherElement;
    }
    return sum;
}

function getOddNumbers(arrayNumbers){
    const arrayOfOddNumbers = [];
    for(let i = 0; i < arrayNumbers. length; i++){
        const index = i;
        const element = arrayNumbers[index];
        if(element % 2 === 1){
            arrayOfOddNumbers.push(element);
        }
    }
    return arrayOfOddNumbers;
}


const myArray = [12, 376, 11, 23, 45, 782, 56, 89];
const myNewArrayForOddNumbers = getOddNumbers(myArray);
const myResult = getSumOfAnArray(myNewArrayForOddNumbers);

console.log('New array of odd numbers:', myNewArrayForOddNumbers);
console.log('Summation of New Array(odd numbers) :', myResult);









