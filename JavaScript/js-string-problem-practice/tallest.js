function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

// find lowest number from the array
function lowestInArray(numbers){
    let minimum = numbers[0];
    for(let j = 0; j < numbers.length; j++){
        const arrIndex = j;
        const arrElement = numbers[arrIndex];
        if(minimum > arrElement){
            minimum = arrElement;
        }
    }
    return minimum;
}


const heights = [167, 190, 120, 165, 137, 265];

const tallest = maxInArray(heights);
console.log("Tallest person height in cm is",tallest);

const shortest = lowestInArray(heights);
console.log("Shortest person height in cm is",shortest);