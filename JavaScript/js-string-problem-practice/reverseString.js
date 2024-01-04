function reverseString(string){

    let reverse = '';
    for(let i = string.length - 1; i >= 0; i--){
        const index = i;
        const element = string[index];
        reverse = reverse + element;
    }
    return reverse;
}



const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log(reversed);