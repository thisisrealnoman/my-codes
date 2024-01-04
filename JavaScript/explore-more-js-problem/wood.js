

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoods = perChairWood * chairQuantity;
    const tableWoods = perTableWood * tableQuantity;
    const bedWoods = perBedWood * bedQuantity;

    return chairWoods + tableWoods + bedWoods;
}

const totalWood = woodCalculator(1, 1, 1);
console.log("Total wood required :", totalWood);