function milesToFeet(miles){
    const km = miles * 1.60934;
    return km;
}

const myMiles = 2;
const myKm = milesToFeet(myMiles);
console.log(myKm);