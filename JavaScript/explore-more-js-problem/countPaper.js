function paperRequirements(QuantityBook1, QuantityBook2, QuantityBook3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    const paperNeededForBook1 = QuantityBook1 * book1Pages;
    const paperNeededForBook2 = QuantityBook2 * book2Pages;
    const paperNeededForBook3 = QuantityBook3 * book3Pages;
    const totalPagesNeeded = paperNeededForBook1 + paperNeededForBook2 + paperNeededForBook3;
    return totalPagesNeeded;
}

const myPagesNeeded = paperRequirements(1, 2, 3);
console.log(myPagesNeeded);