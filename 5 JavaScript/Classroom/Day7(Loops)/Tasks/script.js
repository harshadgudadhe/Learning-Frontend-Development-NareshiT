                                                    // Tasks

// 1. WAJP to print sum of array elements

let arr=[5,4,3,2,1];
let sum=0;

//Way-1
// for(i=0; i<=arr.length-1; i++)
// {
//    sum += arr[i];
// }
// console.log(sum);

//Way-2
for(let i of arr)
{
   sum += i;  
}
console.log(sum);
//------------------------------------------------------------------------------------

//2. WAJP to check wheter sum of digits is equals to product of digits for a given number
// example= 144
// 1+4+4 =9
// 1*4*4=16
// output = No;
// Example2 = 22  ===> yes  

let num= prompt("Enter any number");
let sum2=0,multi=1;
while(num !=0)
{
   sum2 += num%10;
   multi *= num%10;
   num= Math.floor(num/10);
}

if(sum2==multi)
{
    console.log("Yes");
}else{
    console.log("Not");
}
//----------------------------------------------------------------------------------------


// 3.WAJP Using loop find the sum of nested arrays and print the sum.
//Example: [[10,20,30,40,50] , [10,20,30,40,50] , [10,20,30,40,50]]

//Way-1
let marks = [[10,20,30,40,50], [20,20,30,40,50], [30,20,30,40,50]];
for (let i of marks) 
{
    let totalSum=0;
    for (let j of i) 
    {
        totalSum += j;
    }
    console.log("Sum of nested arrays:", totalSum);
}

//Way-2
// let marks = [[10,20,30,40,50], [20,20,30,40,50], [30,20,30,40,50]];
// for (let i in marks) {
//     let sum = 0;
//     for (let j of marks[i]) {
//         sum += j;
//     }
//     console.log(`The sum of test ${+i+1} is ${sum}`);
// }

//---------------------------------------------------------------------------------------

// 4. WAJP to print the following pattern
// P
// P R
// P R A
// P R A S
// P R A S A
// P R A S A D


let str1="PRASAD", str2='';
for(let i=0; i<str.length; i++)
{
    str2 = str2 + " " + str.charAt(i);
    console.log(str2);
}


let str= "JAVA", str3= '';
for(let i=str.length; i>=0; i--)
{
    str2 = str2 + " " + str.charAt(i);
    console.log(str2);
}