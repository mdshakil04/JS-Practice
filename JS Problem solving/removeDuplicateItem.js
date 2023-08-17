// duplicate item remove from Array
const friends =['Rashed','Anower', 'Rinku', 'Rakib', 'Riaz', 'Ripon', 'Rinku', 'Rashed', 'Riaz','Rashed', 'Zahid','Anower'];
function removeDuplicate(friends){
    // first of all we have to add a new array to contain unique friends
    const unique = [];
    // we use for loop to get all items from an Array
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i];
        // This is the  condition to get unique items from the given Array. and it will put unique friend to the new Array
        if(unique.includes(friend) ===  false){
            unique.push(friend);
        }
    }
    // finally we have to return the new Array
    return unique;
}
const uniqueFriends = removeDuplicate(friends);
console.log(uniqueFriends);