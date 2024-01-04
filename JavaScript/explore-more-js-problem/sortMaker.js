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

const myArray = [4,-4];
console.log(sortMaker(myArray));