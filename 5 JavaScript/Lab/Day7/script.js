//Arrays Task

//Que 1 :
// Write a 'JavaScript' program to store 10 elements in array and print them on a console take the inputs from the user.

let arr = [];
for (let i = 0; i < 10; i++) {
	let input = prompt(`Enter element ${i+1}:`);
	arr.push(input);
}
console.log("Array elements:", arr);
//---------------------------------


// Que 2:
// Write a 'JavaScript' program to sort the numbers array using selection sort technique without using predefined function.
// The selection sort technique is the normal sorting technique used to sort the array by comparing the elements and swapping them.
// Sample Input :
// let numbers = [45, 3, 25, 78, 12];
// Sample output :
// Ascending Order: [3, 12, 25, 45, 78]
// Descending Order: [78, 45, 25, 12, 3]

// Ascending Order: [3, 12, 25, 45, 78]
let numbers= [45,3,25,78,12];
for(let i=0; i<numbers.length; i++)
{
    for(let j=1; j<numbers.length; j++)
    {
        if(numbers[i] > numbers[j])
        {
           let temp = number[i];
           number[i]= numbers[j];
           numbers[j]= temp; 
        }
    }
}
console.log(numbers);

// Descending Order: [78, 45, 25, 12, 3]
let numbers1= [45,3,25,78,12];
for(let i=0; i<numbers1.length; i++)
{
    for(let j=1; j<numbers1.length; j++)
    {
        if(numbers1[i] < numbers1[j])
        {
           let temp = number1[i];
           numbers1[i]= numbers1[j];
           numbers1[j]= temp; 
        }
    }
}
console.log(numbers1);
//---------------------------------------------------------------------------------------------------


// Que 3 :
// Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.
// The original array is containing both numbers and strings.
// define two empty arrays: numbers and strings
// use the .forEach() method to iterate through mixedArray
// check the type of the element using typeof operator and store the respective type in the array.
// if the type is string add the element into the string array else add it into the numbers array.
// Sample input :
// let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];
// sample output :
// Numbers: [12, 45, 78]
// Strings: ["apple", "banana", "cherry", "orange"]

//
let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];
let nums = [];
let strs = [];
for(let i=0; i<mixedArray.length; i++)
{
    if(typeof(mixedArray[i])==typeof(0))
    {
        nums.push(mixedArray[i]);
    }else{
        strs.push(mixedArray[i]);
    }
}
console.log(nums);
console.log(strs);
// //---------------------------------------------------------------------------------------------------------------


// Que 4 :
// Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays.
// The original array contains only the numeric values.
// your task is to find whether the array element is even or add
// Take 2 separate arrays : evenArr and oddArr.
// if the element is even add it into the evenArr else add it into the oddArr.
// Sample input :
// Numbers Array : let orgArray = [3, 12, 25, 45, 78]
// Sample Output :
// Even Array = [12, 78]
// Odd Array = [3, 25, 45,]

//
let orgArray = [3, 12, 25, 45, 78];
let evenArray = [];
let oddArray = [];
for(let i=0; i<orgArray.length; i++)
{
  if(orgArray[i]%2==0)
  {
      evenArray.push(orgArray[i]);
  }else{
      oddArray.push(orgArray[i]);
  }
}
console.log(evenArray);
console.log(oddArray);

//------------------------------------------------------------------------------------------------------------------


// Que 5:
// Write a 'JavaScript' program to print Sum of All array elements.
// your task is to take the numbers array and the elements from the user using the prompt() function.
// you have to find and print the sum of the all array elements.
// sample input:
// let numbers = [45, 3, 25, 78, 12];
// Sample output :
// The sum of array elements is : 163

let num = []; sum = 0;
for (let i = 0; i < 6; i++) 
{
    let input = +prompt(`Enter element ${i+1}:`);
    num.push(input);
}
for(let i=0; i<num.length; i++)
{
    sum += num[i];
}
console.log(`Sum of array Elements is : ${sum}`);
//-------------------------------------------------------------------------------------------------------------------