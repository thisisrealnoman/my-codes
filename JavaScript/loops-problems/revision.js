// string type variable 
var bottle = 'water';
var bottleColor = 'yellow';
// number type variable
var sunglassPrice = 120;
var penColor = 'blue';
// boolean type variable
var isExpensive = true;

// try to make meaningful variable
var tableItems = ['bottle', 'pen', 'sunglass', 'calculator', 'wallet'];

var item3 = tableItems[3];  // to get the item by index
tableItems[4] = 'money-bag';  // set a new value to a specific index
var bottleIndex = tableItems.indexOf('bottle');  // find the index of a specific item
//push pop
//push to add an element in the last position of a array
// delete the last element of a array

//unshift shift
// unshift , add an element to a array in first position
// delete an array from the beginning of a array

console.log(tableItems);
console.log("Index of the Bottle in the Array: ", bottleIndex);


//conditional

if(tableItems.length > 6){
    //
}

else if(tableItems[0] == 'bottle'){
    //
}

else{
    //
}