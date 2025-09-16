                                                        /*  Day 5  */ 

// simple-if 
// Take a number from user if number and generate a number between 1 to 14 using Math.random() and compare, if user guesses right, he won else check whether user number is greater than generated one or less than the generate one

// let userInput = prompt("Enter a number between 1 to 14");   
// let randomNum = Math.floor(Math.random() * 14) + 1;   // 1 to 14
// console.log(randomNum);
// if(userInput == randomNum){
//     console.log("You won the game");
// }else if(userInput > randomNum){
//     console.log("Your number is greater than the generated number");
// }



// let userInput = prompt("Enter a number between 1 to 14");

// console.log(( Math.floor(Math.random() * 14) + 1));

// if(userInput == ( Math.floor(Math.random() * 14) + 1)) 
// {
//     console.log("You won the game");
// }else if( userInput > ( Math.floor(Math.random() * 14) + 1))
// {
//     console.log("Your number is greater than the generated number");
// }

let userInput = prompt("Enter a number between 1 to 14");   
let randomNum = Math.ceil(Math.random() * 14);  


// Switch case 
// Js code to print day of a week when number of the week is given.

let day = prompt("Enter a number between 1 to 7");

switch(day)
{    
    case '1':
        console.log("Monday"); break;
    case '2':
        console.log("Tuesday"); break;
    case '3':
        console.log("Wednesday"); break;
    case '4':
        console.log("Thursday"); break;  
    case '5':
        console.log("Friday"); break;
    case '6':
        console.log("Saturday"); break;
    case '7':
        console.log("Sunday"); break;
    default:
        console.log("Invalid Input"); break;    
}


//Task
//Build a basic calculator usinf IF & SWICTH CASE

let a=10, b=20;
let operation = prompt("Enter the operation you want to perform: +, -, *, /");

if(operation == '+' || operation == '-' || operation == '*' || operation == '/')
{
    switch(operation)
   {
    case '+': console.log (a+b); break;
    case '-': console.log (a-b); break;
    case '*': console.log (a*b); break;
    case '/': console.log (a/b); break;
   }
}else{
    console.log("Invalid Operation");
}



