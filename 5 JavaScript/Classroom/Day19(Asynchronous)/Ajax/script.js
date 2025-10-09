                                                        //Ajax

//Basic Examples:
// //Example of Synchronous:
// console.log("Hiiiii");
// console.log("Bye");

// //Example of Asynchronous:
// setTimeout(function() 
// {
//  console.log("Hiiiii")
// }, 5000);
// console.log("Bye");
//-------------------------------------------------------------------------------


//Task1: Welcome --> Countdown --> 
// let para = document.getElementById('w');
// let c=10;
// setTimeout(()=> {
//     para.textContent = "Welcome";
//     timer();
// },1000);

// function timer(){
//     let x= setInterval(()=> {
//         para.textContent = --c;
//         if(c==0){
//             para.textContent = "Lodu Lalit";
//             clearInterval(x);
//         }
//     },1000)
// }
//--------------------------------------------------------------------------------------


//Task2: Stop Watch
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
});