const numbers = [1, 22, 333, 4444, 55555];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'iphone', price: 120000},
    {id: 2, name: 'iPad', price: 80000},
    {id: 3, name: 'mac book air', price: 150000},
    {id: 4, name: 'samsung s90 ultra pro max prime', price: 90000},
    {id: 5, name: 'xiaomi phone', price: 50000},
    {id: 6, name: 'asus xiplox PhoNE 2099', price: 85000},
    {id: 7, name: 'beats wwx', price: 99999},
    {id: 8, name: 'hp hexabook laptop', price: 89000},
    {id: 9, name: 'ipod', price: 40000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProduct(product, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        // console.log(product.name.includes(search));
    }
    return matched;
}

const myResult = matchedProduct(products, 'phone');
console.log(myResult);