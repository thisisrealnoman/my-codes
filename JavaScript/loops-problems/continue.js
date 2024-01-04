var numbers = [40, 90, 83, 57, 29, 45, 79, 100, 78, 23, 358, 34, 54];

for(var i = 0; i < numbers.length; i++){
    number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}