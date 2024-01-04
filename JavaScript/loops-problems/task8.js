var bookPrices = [200, 339, 289, 37, 989, 776, 234, 55, 78, 90];

for(var i = 0; i < bookPrices.length; i++){
    bookPrice = bookPrices[i];
    if(bookPrice > 200){
        continue;
    }
    console.log(bookPrice);
}