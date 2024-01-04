function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Please enter a number!";
    }
    const result = number * number;
    return result;
}

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please Enter a String!";
    }

    else if(string1.includes(string2)){
        return true;
    }

    else{
        return false;
    }
}

function sortMaker(arr){
    const newArr = [];
    if(arr[0] === arr[1]){
        return 'equal';
    }
    else if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else{
        if(arr[0] > arr[1]){
            return arr;
        }
        else{
            newArr.push(arr[1], arr[0]);
            return newArr; 
        }
    }
}


function findAddress(obj){
    const myResult = obj.street + ", " + obj.house + ", " + obj.society;
    return myResult;
}

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