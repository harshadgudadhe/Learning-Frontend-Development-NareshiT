//functions in JavaScript

//Example1 : helloWorld
//Way-1
//Function Definition
function helloWorld()
{
    console.log("Hello World");
}
//function call
helloWorld();
//------------------------------

//Way-2
helloWorld();
function helloWorld()
{
    console.log("Hello World!")
}
//====================================================================

//Example2: write a function that takes two values and prints their sum
function addTwoValue(a,b)
{
  console.log(a+b);
}
addTwoNum(5,3);                   //output: 8
addTwoValue("Durga","Prasad");    //output: DurgaPrasad
addTwoValue(2);                   //output: 2 + undefined= NaN
addTwoValue();                   //output: undefined + undefined= NaN
//=====================================================================

//Example3 : write a function that accepts a string and returns no.of characters.
function returnNoOfCharacter(str)
{
    if(typeof(s)=='string')
    {
     return str.length;
    }else{
        return "input should be only in string"
    }
}
//Function Call
console.log(returnNoOfCharacter("Prasad"));
//==========================================================================

//Example4: 
function sample()
{
    console.log("hi");
}
console.log(sample);
// Output = It will write the whole function definition in console.


//Way-2 
let x=function()                   //function expression
{
    console.log("bye");
}
// x();                        //we can call function like this also.
console.log(x);                 
//Output: It will  also write the whole function definition in console.
//==============================================================================


//Exaample5: 
//Way-1(Simple Function)
function areaOfCircle(radius)
{
    return Math.PI*radius*radius;
}
let a1= areaOfCircle(5);
console.log(a1);
//----------------------------------------------------
//Way-2(Function Expression)
let areaOfCircle2 = function(radius)     //Anonymous function
{
    return Math.PI*radius*radius;
}
let a2= areaOfCircle(5);
console.log(a2);
//-----------------------------------------------------
//Way-3(Arrow function) 

//Normal:
function add(a,b)
{
    return a+b;
}
console.log(add(5,3));

//function expression
let add2= function(a,b)
{
    return a+b;
}
console.log(add2(5,3));

//arrow function
//way-1 (for single statements)
let add3 = (a,b) => a+b; 
console.log(add3(5,3));

//way-2 (more single statements)
let add4 = (a,b) => 
{a+b; 
console.log(add3(5,3));
}
//=====================================================================