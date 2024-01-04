function make_avg(arraySum, size){
   return  arraySum / size;
}

var myNumbers = [10, 20, 30, 40, 50];
var sum = 0;

for(var i = 0; i < myNumbers.length; i++){
    sum = sum + myNumbers[i];
}

// console.log(sum);

var result = make_avg(sum, myNumbers.length);
console.log(result);