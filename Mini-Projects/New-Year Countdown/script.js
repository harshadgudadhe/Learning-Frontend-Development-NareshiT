//New-Year Countdown                
let para = document.getElementById('w');
let c=10;
setTimeout(()=> {
    para.textContent = "Start";
    timer();
},1000);

function timer(){
    let x= setInterval(()=> {
        para.textContent = --c;
        if(c==0){
            para.textContent = "Happy New Year!!!!!";
            para.style.color = "Green";
            clearInterval(x);
        }
    },1000);
}