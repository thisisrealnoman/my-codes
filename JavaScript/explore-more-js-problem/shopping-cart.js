const shoppingCart = [
    {Name: 'Shoe', Price: 2000},
    {Name: 'Shirt', Price: 1500},
    {Name: 'Pant', Price: 3200},
    {Name: 'Belt', Price: 700}
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.Price;
        // console.log(product);
    }
    return sum;
}

const myShoppingCost = totalCost(shoppingCart);
console.log("Total expense :", myShoppingCost);