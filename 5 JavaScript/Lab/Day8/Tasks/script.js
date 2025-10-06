//Task-1
// Note : If you completed the previous questions then only start this assignment

// Que 1 :
// --------
//     write a 'JavaScript' program to Sort the array [45, 3, 25, 78, 12] in ascending and descending order using predefined method.
//         - Define an array by taking the elements from the user using the prompt() function and parseInt() to typecast.
//         - use the sort() method to sort the array.
//         - after sorting the array print the array using the for...of loop.

//     Sample Input :
//             let numbers = [45, 3, 25, 78, 12];
//     Sample output :
//             Ascending Order: [3, 12, 25, 45, 78]
//             Descending Order: [78, 45, 25, 12, 3]





//--------------------------------------------------------------------------------------------------------------

//Use forEach and print each elements cube in given array.
// let arr= [5,4,9,8];
// arr.forEach(function(ele,ind)
// {
//     console.log(ele*ele*ele);
//             //or
//     console.log(ele**3);
// })

// 10. Filter:
// ---------  
//         similar to map but it returns only the elements whose condition is true.
// eg:
// let arr=[5,4,6,3];
// let x = arr.filter((e,i)=>   e>=5 );
// console.log(x);                          //output: [5,6]


// Que 2 :
//     Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.
//     - Define the array mixed of the string and number type elements.
//     - separate the string and the number in separate arrays using filter() method.
   
//     sample input :
//             let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];
//     sample output:
//             string Array = ['apple', 'banana', 'cherry']
//             number array = [10, 20, 30]
   
let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];
let str = [];
let num = [];
let x = mixedArr.filter( function (e,i) 
    {  
        if(typeof(e)=="string")
        {
           str.push(e);
        }else{
           num.push(e);
        }
    })
console.log("String Array =",str);
console.log("Number Array =",num);
//--------------------------------------------------------------------------------------------------------------




// Que 3 :
//     Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays using predefined method.

//     - Define the array of the integers.
//     - using the filter() method separate the even and odd numbers from the array.

//     sample input :
//         let numberArray = [2,3,4,5,6,7,8,10,12,13];
//     sample output :
//         even elements : 2 4 6 8 10 12
//         odd elements : 3 5 7 13







//--------------------------------------------------------------------------------------------------------------




// Que 4 :
//     Write a 'JavaScript' program to print Sum of All array elements using predefined method.
//     - Define the numbers array by taking the input from the user using the prompt() function by typecasting into number using parseInt().
//     - using the reduce() method add the elements of the array into one variable.

//     sample input :
//         let numberArr = [1,2,3,4,5,6,7,8,9]
//     sample output :
//         sum = 45









//--------------------------------------------------------------------------------------------------------------


// Que 5 :
//     Write a 'JavaScript' program Convert Names to Uppercase in array using predefined method.
//     - Define the string array and insert the elements by taking the input from the user using the prompt() function.
//     - convert the each element to uppercase using the map() function.
//     - store the converted elements into separate array and print it.

//     sample input :
//             let namesArray = ["ravindra","rohit","aniket"];
//     sample output :
//             uppercase names : [ 'RAVINDRA', 'ROHIT', 'ANIKET' ];
  








//--------------------------------------------------------------------------------------------------------------


// Que 7 :
// --------
//     Write a 'JavaScript' program to Calculate Average from an Array elements using the predefined method.
   
//     - Define the numbers array and insert elements by taking the input from the user using the prompt() function.
//     - calculate the sum of the elements using the reduce() method and find the average by dividing the sum with the length of the array.

//     sample input : const nums = [10, 20, 30, 40, 50];
//     sample output : average of the array elements : 30









//--------------------------------------------------------------------------------------------------------------