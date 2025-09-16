                               
//Standard-for loop                               
let arr = [5,4,3,2,1];
for(i=0; i<=arr.length-1; i++)
{
    console.log(arr[i]);          // 5 4 3 2 1  (prints value present in array)
}


//for of loop 
let arr2=[5,4,3,2,1]
for(let i of arr2)
{
    console.log(i);               // 5 4 3 2 1  (prints value present in array)
}


//for in loop
//for of loop 
let arr3=[5,4,3,2,1]
for(let i in arr3)
{
    console.log(i);                // 0 1 2 3 4  (prints index of array)
}

//difference between standard for , for in and for of loop
//standard for loop and for of loop gives the value present in array
//for in loop gives the index of array


//------------------------------------------------------------------------------------------------------------------------------------

// Tasks on Loops :
//      Level 0:
//         1. print even numbers from 1-20
//         2. print 3 table in console.
//      Level 1:
//         1. check a number is palindrome or not ?
//         2. check a string is palindrome
//      Level 3: 
//         1. P
//            P R 
//            P R A
//            P R A S
//            P R A S A
//            P R A S A D

//Level 0:
//1. print even numbers from 1-20
for(i=0; i<=20; i++)
{
    if(i%2==0)
    {
        console.log(i);          // 0 2 4 6 8 10 12 14 16 18 20
    }    
}

//2. print 3 table in console.
for(i=1; i<=10; i++)
{
    console.log(3*i);            // 3 6 9 12 15 18 21 24 27 30
}