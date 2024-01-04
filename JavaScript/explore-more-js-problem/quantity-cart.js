const shoppingCart = [
    {Name: 'Shoe', Price: 2000, Quantity: 2},
    {Name: 'Shirt', Price: 1500, Quantity: 5},
    {Name: 'Pant', Price: 3200, Quantity: 4},
    {Name: 'Belt', Price: 700, Quantity: 3},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.Price * product.Quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const myShoppingCost = totalCost(shoppingCart);
console.log("Total expense :", myShoppingCost);