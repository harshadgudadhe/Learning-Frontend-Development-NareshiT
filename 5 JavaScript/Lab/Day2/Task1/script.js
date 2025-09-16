// Que 1 : Write a 'JavaScript' program to check and print that the given number is even or odd without using ternary operator and control statements and print the output on the console.
// Sample input1 : let a = 10
// Sample Output : EVEN
// Sample input2 : let a = 125
// Sample Output : ODD
// Note : Don't use any control statement only use logical operators and Take the input from the user using prompt() function.

let a= prompt("Enter a number ");
console.log((a % 2 == 0) && "EVEN" || "ODD");
                             
// ========================================================================================================

// Que 2 : Write a 'JavaScript' program to check and print the Maximum number among two numbers without using ternary operator, control statements and predefined methods.
// Sample input : let a = 10 , b = 20
// Sample Output : MAX = 20
// Note : Don't use any control statement or predefined methods only use operators and Take the input from the user using prompt() function..        

let num1= prompt("Enter a num1 :");
let num2= prompt("Enter a num2 :");
console.log((num1 > num2) && "MAX = "+num1 || "MAX = "+num2);

// ========================================================================================================  

// Que 3 : Write a 'JavaScript' program to check and print the Maximum number among three numbers without using ternary operator, control statements and predefined methods.
// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200
// Note : only use operators to solve the question and Take the input from the user using prompt() function..

var n1= prompt("Enter a num1 :");
var n2= prompt("Enter a num2 :"); 
var n3= prompt("Enter a num3 :"); 
console.log((n1>n2 && n1>n3) && "MAX = "+n1 || (n2>n1 && n2>n3) && "MAX = "+n2 || "MAX = "+n3 ) ;   

// ========================================================================================================

// Que 4 :  Write a 'JavaScript' program to check and print the Maximum number among three numbers using ternary operator.
// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200
// Note : Take the input from the user using prompt() function. 

var n1= prompt("Enter a num1 :");
var n2= prompt("Enter a num2 :"); 
var n3= prompt("Enter a num3 :"); 
(n1>n2 && n1>n3) ? console.log("MAX = "+n1) : (n2>n1 && n2>n3) ? console.log("MAX = "+n2) : console.log("MAX = "+n3);

// ======================================================================================================================  

// Que 5 :  Write a 'JavaScript' program to check and print that given number is even or odd using ternary operator.
// Sample input : let a = 10
// Sample Output : EVEN
// Sample input : let a = 125
// Sample Output : ODD                      
// Note : Take the input from the user using prompt() function.  

let n= prompt("Enter Any Number: ");
(n%2==0) ? console.log("Even") : console.log("Odd");

// =======================================================================================================================                  

// Que 6 : A shopkeeper buys a TV set for Rs. 3500 and sells it at a profit of 27%. Apart from this a VAT of 12.7% and Service Charge is 3.87% is charged.
// -------  Write a JavaScript program to Display total selling price, profit along with vat and service charge.
//          To calculate the selling price, profit, VAT, and service charge, follow these steps:

//          1) Calculate the selling price:
//             Selling Price = Cost Price + Profit
//             Selling Price = Rs. 3500 + (27% of Rs. 3500)

//          2) Calculate the profit:
//             Profit = Selling Price - Cost Price

//          3) Calculate VAT:
//             VAT = 12.7% of Selling Price

//          4) Calculate Service Charge:
//             Service Charge = 3.87% of Selling Price

//     Sample output :
//             Cost Price: Rs. 3500.00
//             Profit (27%): Rs. 945.00
//             Selling Price (without VAT & Service Charge): Rs. 4445.00
//             VAT (12.7%): Rs. 564.52
//             Service Charge (3.87%): Rs. 171.00
//             Total Selling Price (with VAT & Service Charge): Rs. 5180.52

let cP = 3500;
console.log("Cost Price: Rs. "+cP.toFixed(2));
let sP = 3500 + ((27/100)*3500);
let profit = sP - cP;
console.log("Profit (27%): Rs. "+profit.toFixed(2));
console.log("Selling Price (without VAT & Service Charge): Rs. "+sP.toFixed(2));
let vat =(12.7/100)*sP;
console.log("VAT (12.7%): Rs. "+vat.toFixed(2));
let sC = (3.87/100)*sP;
console.log("Service Charge (3.87%): Rs. "+sC.toFixed(2));
let totalSP = sP + vat + sC;
console.log("Total Selling Price (with VAT & Service Charge): Rs. "+totalSP.toFixed(2));
// =================================================================================================================================