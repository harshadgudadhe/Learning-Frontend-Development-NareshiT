// Additional Programs : 

// Que 2 : Develop a program for an online bus ticket booking platform called "Bus Ticket Booker."
// ------  The platform offers tickets for a fixed price of Rs. 300 per seat. However, there are discounts available for senior citizens.
//         If a passenger's age is between 60 and 100 , they will receive a 20% discount on the total booking cost.
//         Write a JavaScript program for "Bus Ticket Booker" that takes the number of tickets and the age of the passenger as inputs and calculates the total booking cost after applying any     applicable discount using the ternary operator. The program should display the bill with a suitable message, including the total cost and the discount amount (if applicable).
//         Your task is to implement the program logic using only Ternary Operator.

// Example 1: Passenger is not a senior citizen
// Sample Input:
//               number of tickets: 3
//               age of the passenger: 45
// Sample Output:
//               Total cost before discount: Rs. 900.00
//               Discount amount: Rs. 0.00
//               Total cost after discount: Rs. 900.00

// Example 2: Passenger is a senior citizen
// Sample Input:
//               number of tickets: 2
//               age of the passenger: 65
// Sample Output:
//               Total cost before discount: Rs. 600.00
//               Discount amount: Rs. 120.00
//               Total cost after discount: Rs. 480.00
// Note : Take the input from the user using prompt() function.  

let numberOfTickets = prompt("Enter Number of tickets: ");
let age = prompt("Enter your age: ");
let ticketPrice = 300;
let totalCost = numberOfTickets * ticketPrice;
console.log("Total cost before discount: Rs. " + totalCost.toFixed(2));
let discount = (age >= 60 && age <= 100) ? totalCost * 0.20 : 0;
console.log("Discount amount: Rs. " + discount.toFixed(2));
let finalCost = totalCost - discount;
console.log("Total cost after discount: Rs. " + finalCost.toFixed(2));

// ========================================================================================================      
   
// Que 3 : Write a C program that takes an integer as input and checks if it is a positive, negative, or zero.
// ------- Display the appropriate message as output using the ternary operator.
   

//     Sample Input:
//            enter a number: -1
//     Sample Output:
//            you entered negative number

//     Sample Input:
//            enter a number: 1
//     Sample Output:
//            you entered positive number

//     Sample Input:
//            enter a number: 0
//     Sample Output:
//            you entered zero
// Note : Take the input from the user using prompt() function.  

let number = prompt("Enter a number: ");    
let result = (number > 0) ? "you entered positive number" : (number < 0) ? "you entered negative number" : "you entered zero";
console.log(result);
// ========================================================================================================