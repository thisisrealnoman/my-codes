var shoppingCart = {
    books : 10,
    pen : 20,
    keyboard : 1,
    mouse : 1,
    sunglass : 3
}


/*-------- How to get property value ; 3 ways to get property value -------*/

//1. when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

//2. alternative system
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

//3. when you dont know the specific property name
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);


// when you want all keys/properties
var properties = Object.keys(shoppingCart);
console.log(properties);

// when you want all values
var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);

// console.log(shoppingCart);


// -------------- how to set property value ----------------
//1.
shoppingCart.mouse = 15;
console.log(shoppingCart);

//2.
shoppingCart['books'] = 100;
console.log(shoppingCart);

//3.
var aPropertyName = 'keyboard';
shoppingCart[aPropertyName] = 99;
console.log(shoppingCart);