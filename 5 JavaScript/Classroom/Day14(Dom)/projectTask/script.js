//Small Project 1: "Counter Project"
// let c=0;
// function incr()
// {
//     if(c<20)
//     {
//        c++;     
//     }else{
//         alert("Number Can't be increase after 20");
//     }
//     document.getElementById('count').textContent = c;
// }

// function decr()
// {
//     if(c>0)
//     {
//        c--;
//     }else{
//         alert("Number Can't be decrease after 0");
//     }
//     document.getElementById('count').textContent = c;
// }

// function reset()
// {
//     c=0;
//     document.getElementById('count').textContent = c;
// }
//------------------------------------------------------------------------------------------

//Small Project 2: "textContent"
// const h = document.getElementById('heading');
// function fun()
//     {
//         alert(h.textContent = "HII");
//     }


//Small Project 3: "InnerHTML"
// const h = document.getElementById('heading');
// function fun()
//     {
//         h.innerHTML = "Hello <b>World</b>";
//     }

//Small Project 4: "style"
// const p = document.querySelector('#para');
// function fun()
// {
//     p.style.backgroundColor = "blue";
// }

//---------------------------------------------------------------------------------------------

//Task-2 --> "Check number entered by user is Even or odd"

const userInput = document.querySelector('#inp');
const result = document.querySelector('#result');
function fun()
{
    if(userInput.value%2==0)
    {
        result.innerHTML = "Even Number";
        result.style.color = "Green";
    }else{
        result.innerHTML = "ODD Number";
        result.style.color = "Red";
    }
}