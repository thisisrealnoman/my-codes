function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

var total = add(80, 21);
console.log(total);

function bringShingara(money){
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}
var myTaka = 150;
var shingaras = bringShingara(myTaka);
console.log('eating shingara', shingaras);