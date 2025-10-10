//Task2

let textArea=document.getElementById('textArea');
let warningPara = document.getElementById('warning');

let wordCount=0;
addEventListener('keypress', function(){
    ++wordCount;
    if(wordCount>10)
    {
        warningPara.textContent="You have reached limit";
        warningPara.style.color='red';
    }
});