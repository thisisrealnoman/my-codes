
// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i>5){
//         break;
//     }
// }


// var roastGiven = 0;
// while(roastGiven < 7){
//     console.log("Roast nen, please!");
//     if(roastGiven > 3){
//         break;
//     }
//     roastGiven++;
// }


var tableItems = ['pen', 'calculator', 'mug', 'phone', 'glass'];

for(var i = 0; i < tableItems.length; i++){
    var item = tableItems[i];
    if( item == 'phone'){
        break;
    }
    console.log(item);
}


var numbers = [40, 90, 83, 57, 29, 45, 79, 100, 78, 23, 358, 34, 54];

for(var i = 0; i < numbers.length; i++){
    number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}