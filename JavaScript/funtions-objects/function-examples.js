/* function functionName(perameters){
    //function body
    //return
}

var returnedValue = functionName(perameters value); */

function getAverage (semester1, semester2, semester3) {
    const total = semester1 + semester2 + semester3;
    const average = total / 3;
    return average;
}

const semester1Marks = 50;
const semester2Marks = 58;
const semester3Marks = 60;

var myAverage = getAverage(semester1Marks, semester2Marks, semester3Marks);
var correctedValue = returnedValue.toFixed(2);
correctedValue = parseFloat(correctedValue);
console.log(correctedValue);