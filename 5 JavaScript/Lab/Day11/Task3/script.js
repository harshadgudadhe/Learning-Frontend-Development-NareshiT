//Task3
let inputElement = document.getElementById('textInput');

addEventListener("input", function(){
    let inputValue = inputElement.value.toUpperCase();
    inputElement.value = inputValue;
});