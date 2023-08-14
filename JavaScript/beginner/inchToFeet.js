// const myInches = 12;
// const myFeet = myInches/12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('Dadar Feet : ', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadir feet : ', dadiFeet);


function inchesToFeet(inches){

    const feet = inches/12;
    return feet;

}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log('nana feet: ', nanaFeet);