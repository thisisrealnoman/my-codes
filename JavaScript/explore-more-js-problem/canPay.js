function canPay(changeArray, totalDue){
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        const takaNote = changeArray[i];
        sum = sum + takaNote;
    }
    if(sum >= totalDue){
        return true;
    }
    else{
        return false;
    }
}

const myChange = [5, 0, 5];
const chipsPrice = 10;
const output = canPay(myChange, chipsPrice);
console.log(output);