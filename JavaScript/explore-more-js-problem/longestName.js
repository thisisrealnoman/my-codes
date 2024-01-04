const myFriends = ['Amal', 'Emal', 'Kamal', 'Ibn Rashid Bin Khalid'];

function bestFriend(names){
    let longest = names[0];
    for(let i = 0; i < names.length; i++){
        const index = i;
        const name = names[index];
        if(name.length > longest.length){
            longest = name;
        }
    }
    return longest;
}

const longestName = bestFriend(myFriends);
console.log(longestName);