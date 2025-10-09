//Task4

let inputElement = document.getElementById('userInput');
let outputElement = document.getElementById('convertedToUpperCase');
addEventListener('input', function(){
    convertedText = inputElement.value.toUpperCase();
    outputElement.textContent = convertedText;
});