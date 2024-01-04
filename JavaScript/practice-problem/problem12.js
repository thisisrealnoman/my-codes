/* একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে।
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

const myCar = {
    brand : "CyberZex",
    model : "zx77",
    cc : 5600,
    type : 'sports'
}

console.log(myCar);
myCar.cc = 3500;
console.log(myCar);