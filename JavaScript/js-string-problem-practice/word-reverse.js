function wordReverse(string){
    const parts = string.split(" ");
    const result = [];
    for(let i = parts.length - 1; i >= 0; i--){
        const element = parts[i];
        result.push(element);
    }
    const reversed = result.join(" ");
    return reversed;
}

/*
When I wrote this code,
only God and I understood what I did.
Now only God knows
 */

const myString = 'I am a string';
const myResult = wordReverse(myString);
console.log(myResult);