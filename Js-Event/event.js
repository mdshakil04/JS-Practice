// Option 2. onclick using function. this is important, we will use this some times
function makeRed(){
    document.body.style.background = 'red';
}
// Option 3
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton)
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
// Option 4
const makeGreenButton = document.getElementById("make-green");
// console.log(makeGreenButton)
makeGreenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
// Option 5
const makeAquaButton = document.getElementById("make-aqua");
// console.log(makeAqua)
makeAquaButton.addEventListener('click', makeaqua);
function makeaqua(){
    document.body.style.backgroundColor = 'aqua';
}
// Option 5 another
const makePinkButton =document.getElementById("make-pink");
// console.log(makePink)
makePinkButton.addEventListener('click', function makepink(){
    document.body.style.backgroundColor = 'pink';
})
// Option 5 final. This is very much important, we use this always
document.getElementById("make-purple").addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple';
})