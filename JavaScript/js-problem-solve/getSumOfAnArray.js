function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

const myNumbers = [10, 20, 30, 40, 50, 60];
const sumOfTheArray = getSumOfAnArray(myNumbers);
console.log(sumOfTheArray);

//practice
function summationOfAnArray(arrayNumbers){
    let arrayIndex = 0
    let total = 0;
    while(arrayIndex < arrayNumbers. length){
        const index = arrayIndex;
        const element = arrayNumbers[index];
        total = total + element;
        arrayIndex++;
    }
    return total;
}

const demoNumbers = [11, 22, 33, 44, 55, 66, 77];
const myResult = summationOfAnArray(demoNumbers);
console.log("summation of the array is ", myResult);


