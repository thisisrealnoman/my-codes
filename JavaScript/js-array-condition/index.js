var numbers = [23, 34, 64, 78, 39, 45];

// 1. get element by index
var secondElement = numbers[1];
console.log(secondElement);
// 2. set element value by index
numbers[1] = 77;
numbers[4] = 55;
console.log(numbers);
// 3. find index of an element
var position = numbers.indexOf(45);
console.log(position);