const address = { street: 10, house: "15A", society: 'earth perfect'};

function findAddress(obj){
    const myResult = obj.street + ", " + obj.house + ", " + obj.society;
    return myResult;
}

const myAddress = findAddress(address);
console.log(myAddress);
