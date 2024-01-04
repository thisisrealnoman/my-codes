var shoppingCart = {
    books : 10,
    keyboard : 12,
    mouse : 1,
    sunglass : 3,
    pen :17,
    shoes : 7
}

console.log(shoppingCart);

var propertyName = Object.keys(shoppingCart);
console.log(propertyName);

var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);

// with for loop
for(var i = 0; i < propertyName.length; i++){
    keysName = propertyName[i];
    valuesName = shoppingCart[keysName];
    console.log(keysName, valuesName);
}

// for in loop (didnt get it)
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}