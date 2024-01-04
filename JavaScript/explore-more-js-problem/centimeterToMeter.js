function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}

const myCM = 15;
const myMeter = centimeterToMeter(myCM);
console.log(myMeter);