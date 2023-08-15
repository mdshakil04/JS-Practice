// -----1. Where to add---------
const fruitsList = document.getElementById('fruits');
// console.log(fruitsList)
// -------2. What to be added----------
const li = document.createElement('li');
li.innerText = 'JackFruits';
// -------3. add the child----------
fruitsList.appendChild(li);

// Another section add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer)
