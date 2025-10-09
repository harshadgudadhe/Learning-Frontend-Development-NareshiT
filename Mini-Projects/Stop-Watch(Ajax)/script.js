                //Project: Stop Watch

let para = document.getElementById('t');
let s = 0;
let m = 5;
let x;

//Start
document.getElementById('start').addEventListener('click', function(){
    x= setInterval(()=> {
        if(s==0)
        {
            --m;
            s=60; 
        }
        if(m==0 && s==1)
        {
            clearInterval(x);
        }
        para.textContent = `0${m}:${--s}`;
    },50);
    s = 0; m = 5;
});

//Stop
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(x);
    s = 0; m = 5;  
});