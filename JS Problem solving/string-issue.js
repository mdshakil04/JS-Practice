// String is immutable, means- its unable to change.
let firstName = "Ena";
let lastName = "Poribohon";
let fullName = firstName + lastName;
console.log(fullName);
firstName = "Shohag";
console.log(fullName);

// JavaScript case
// ---------------------------------
// when we want get input from userInput, we have to convert user input into lower case or upper case. lower case is more preperable--------

const userName = "blackPink";
const userInput = "blackPinK";
if(userName .toLowerCase()=== userInput.toLowerCase()){
    console.log("Valid User!")
}
else{
    console.log("invalid User");
}
// ----------------------------


// Search String

const lyrics = "Tumi bondhu Kala pakhi ami jeno ki. Bosonto kale tomay bolte parini. Sada Sada kala kala. Prem Jomeche sada kala."

const searchString = 'tumi'

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);
// ------------or-----------------
lyricsLowerCase = lyrics.toLowerCase();
searchLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchLowerCase);
// console.log(doesExist);

// --------------------Index Of---------------------
console.log(lyrics.indexOf("Kala"));
// ------------endsWith------------
const fileName = "bioData.pdf";
fileName.endsWith(".pdf")