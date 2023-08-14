function milesToKilometer(miles){

    kilometer = miles * 1.609344;

    return kilometer;

}

const myMiles = 7;
const myKilometer = milesToKilometer(myMiles);
console.log(myKilometer);