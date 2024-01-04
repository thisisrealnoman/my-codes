const friends = [ 12, 13, 14, 15, 16, 17, 18, 19, 20];


// Removes elements from an array and,
// if necessary, inserts new elements in their place,
// returning the deleted elements
// will change the original array

const partial = friends.splice(2, 3, 66, 777, 8888, 99999);
// start index  , how many do you want to delete(3 means i want to delete 3 items),
// then 66, 777, ..... here these are the value i want to add instead of deleted items
console.log(partial);
console.log(friends);