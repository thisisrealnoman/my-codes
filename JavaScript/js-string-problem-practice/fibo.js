// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/* 
fibo[10] = fibo[9] + fibo[8]
fibo[11] = fibo[10] + fibo[9]
fibo[12] = fibo[11] + fibo[10]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for(let i = 2; i <= 12; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);