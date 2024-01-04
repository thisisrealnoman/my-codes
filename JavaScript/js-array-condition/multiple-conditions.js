var isGraduated = true;
var savings = 10000;
var cars = 10;

// if(isGraduated === true && savings >= 50000){
//     console.log("Lets build a business");
// }
// else{
//     console.log("lets make a sellable skill");
// }

// if(isGraduated === true || savings >= 50000){
//         console.log("Lets build a business");
//     }
// else{
//         console.log("lets make a sellable skill");
// }

if((isGraduated === true && savings >= 50000) || cars >= 10){
    console.log("Lets build a business");
}
else{
    console.log("lets make a sellable skill");
}