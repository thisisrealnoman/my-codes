var student = {
    name : 'Ali Abdal',
    id : 369,
    class : 9,
    marks : 80
}

var mobile = {
    brand : 'samsung',
    model : 's20',
    price : 450000,
    storage : '64GB',
    camera : '30MP',
    color : 'black'
}

var myComputer = {
    brand : 'Apple',
    price : 100000,
    color : 'silver',
    processor : 'i7'
}

console.log(myComputer);

// to find a specific key value
console.log(myComputer.color);

// to change a key value
myComputer.processor = 'i69';
console.log(myComputer);
