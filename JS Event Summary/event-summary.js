// console.log('hi! from js file')

function handleOnclick(){
    handlerStatus =  document.getElementById("handler-status");
    // console.log(handlerStatus);
    handlerStatus.innerText = "Hi! I am Fine. Thank You";
}
// Another Option
document.getElementById("event-listener").addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Oh1! Im quite well. Whats about you?'
})
// change text with input text by clicking button
document.getElementById('Change-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText)
    const changableText = document.getElementById('changable-text');
    changableText.innerText = inputText;
    inputField.value = '';
})