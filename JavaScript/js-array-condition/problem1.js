var fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(">> Index of Banana: ", fruits.indexOf('banana'));
fruits[fruits.indexOf('banana')] = "mango";
console.log(fruits);
console.log(">> replaced banana with mango");
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log("removed Orange and added Watermelon", fruits);
