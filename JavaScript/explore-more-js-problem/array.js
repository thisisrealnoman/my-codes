const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 145, class: 2, name: 'agun'};
const friendsAge = [24, 23, 22, 25, 17, 28, 24, 21];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray(yourArray);
console.log(Array.isArray(friendsAge));
console.log(typeof add);


// -----------------------
// new method
console.log(friendsAge.includes(25));
console.log(friendsAge.includes(24));

//old method
if(friendsAge.indexOf(19) !== -1){
    console.log("exists");
}


// -----------------------------
//concat
const newFriends = [12, 14, 16, 18];
const allFriends = newFriends.concat(friendsAge);
console.log(allFriends);