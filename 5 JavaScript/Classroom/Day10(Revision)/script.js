//Task1: Convert below simple function into Expression and Arrow function?
//Simple
function square(n)
{
    console.log(n*n);
}
square(5);

//Expression
let square1 = function (n)             //No need of "NameOfFunction Here", (Anonymous Function bcoz don't have name)
{
    console.log(n*n);
}

//arrow  
let square2 = (n) =>                   //No need of "Function keyword & NameOfFunction  Here"
{
  console.log(n*n);
}
//-----------------------------------------------------

//Task2: 
//Simple Function
function fun(a,b)
{
    return a+b;
}
console.log(fun(5,2));          // Function call with printing value

//Expression
let fun1 = function(a,b)       
{
   return a+b;
}
console.log(fun1);

//Arrow
let fun2 = (a,b) => 
{
   return a+b;
}
console.log(5,3);
//-------------------------------------------------------

//Task3: 
//Simple function
function fact(n)
{
    let f=1;
    for( let i=n; n>=1; i--)
    {
         f= f*i;
    }
    return f;
}
console.log(fact(5));

//Expression
let fact1 = function (n)
{
    let f=1;
    for( let i=n; n>=1; i--)
    {
         f= f*i;
    }
    return f;
}
console.log(fact1(6));

//Arrow
let fact2 = (n) => 
{
    let f=1;
    for( let i=n; n>=1; i--)
    {
         f= f*i;
    }
    return f;
}
console.log(fact2(7));
//==================================================================================================

//Topic: Callback function
//Example1
function add(a,b)
{
    console.log(a+b);
}

function sub(a,b)
{
    console.log(a-b);
}

function calculate(f1,f2)
{
    f1(5,3); f2(5,3);
}
calculate(add,sub);                  //Here calculate is HOF , & "add,sub" are callback functions
//------------------------------------------------------

//Task1: Callback Function
//create a function cube which take number 'n' as Parameter and print cube of a number. Create a function cal which accept cube as parameters and receive it and calls it back.

function cube(n)                 //2
{
    return n*n*n;
}
function printCube(c)            //3
{
    console.log(cube(5));        //4
}
printCube(cube);                 //1 call to fun->cube //5  output: 125

//Way2
let cube = (n) => console.log(n*n*n);





//===============================================================


//Topic : Currying function
function multi(n1) {  return  (n2) => n1*n2; }                   // Arrow fun

let x= multi(5);
let y1= x(1);
let y2= x(2);
let y3= x(3);
let y4= x(4);
let y5= x(5);
let y6= x(6);
let y7= x(7);
let y8= x(8);
let y9= x(9);
let y10= x(10);
console.log(y1,y2,y3,y4,y5,y6,y7,y8,y9,y10);                               //Output: 5*1=5, 5*2=10, 5*3=15, ........., 5*10=50 
//-------------------------------------------------------------

//Try for 3 numbers
// function multi1(n1) 
// {  
//     return function multi2  (n2) => 
//     {
//         return function multi3 (n3) => 
//         { 
//                 return n1*n2*n3;
//         } 
//     }                                        
// } 
//-------------------------------------------------------------                   