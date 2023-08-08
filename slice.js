const friends = [34, 45, 67, 76, 98, 87,90, 56, 98, 65];
// slice's parameter are 1st= starting index 2nd= end index
const partial = friends.slice(3, 6);
// splice parameter are 1st= starting index 2nd= how much do you want to delete
const doSplice = friends.splice(3, 3, 255, 250, 25879, 25685);
console.log(partial);
console.log(doSplice);
console.log(friends);