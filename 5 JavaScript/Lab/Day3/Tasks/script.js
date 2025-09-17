                                            // # using if - else #

// Que 1.   User Account Status Check
//   We need to determine if a user's account is currently active or inactive to allow or deny certain operations, such as making a purchase.
// - This if-else statement checks the boolean value of isAccountActive. If isAccountActive is true, the user is permitted to proceed; otherwise, they are informed that their account is inactive.
// Sample input : isAccountActive = true
// sample output : Your account is active. You can proceed with your transaction.
// sample input : isAccountActive = false
// sample output : Your account is currently inactive. Please contact support.

//Way-1
// let isAccountActive = true;
// if(isAccountActive==true)
// {
//    console.log("Your account is active. You can proceed with your transaction.");
// }else{
//    console.log("Your account is currently inactive. Please contact support.");
// }
//-------------------------

//Way-2(Based on user input)
let isAccountActive1 = prompt("Enter true or false ");
if(isAccountActive1=="true")
{
   console.log("Your account is active. You can proceed with your transaction.");
}else{
   console.log("Your account is currently inactive. Please contact support.");
}
// ==================================================================================================



// Que 2.    Basic Password Validation (Length Check)
//     A user is setting a new password, and we need to ensure it meets a minimum length requirement.
// - This if-else statement checks if the password string's length is at least 8 characters. If it is, the password is considered valid; otherwise, an error message is displayed.
//     Note : You have to take the input from the user using the prompt() function and by checking the length of the input pass the following testcases.
//     sample input : password = "mySecurePassword123"
//     sample output : Password meets minimum length requirements. Good job!
//     sample input : password = "short";
//     sample output : Password is too short. Please use at least 8 characters.

let password = prompt("Enter Your Password: ");
if(password.length >=8)
{
    console.log("Password meets minimum length requirements. Good job!");
}else{
    console.log("Password is too short. Please use at least 8 characters.");
}
// ==================================================================================================



// Que 3.     Customer Loyalty Tier Program
//     An e-commerce platform assigns customers to different loyalty tiers based on their total spending, offering escalating benefits.
// - This if-else if ladder checks totalSpending against different thresholds. The first condition met determines the customer's loyalty tier. The order of conditions is important here, from highest spending to lowest, to ensure correct categorization.
// Note : Take the input from the user and based on the user spending assign the loyalty tier as
//     -    ' Platinum if spendings are more than 1000 ' ,
//     -    ' Gold if the spendings are more than 500 ',
//     -    ' Silver if the spendings are more than 100 ' else ' bronze '.
//     sample input : totalSpending = 1200
//     sample output : Customer's total spending: $1200. Loyalty Tier: Platinum.
//     sample input : totalSpending = 750
//     sample output : Customer's total spending: $750. Loyalty Tier: Gold.

let totalSpending = +prompt("Enter totalSpending");
if(totalSpending>=1000)
{
    console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Platinum.`);
}else if(totalSpending<1000 && totalSpending>=500)
{
    console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Gold.`);
}else if(totalSpending<500 && totalSpending>=100)
{
   console.log(`Customer's total spending: $${totalSpending}. Loyalty Tier: Silver.`);
}else{
    console.log(`Customer's total spending: $ ${totalSpending}. Loyalty Tier: Bronze.`);
}
// ==================================================================================================



// Que 4.    Vehicle Speed Classification
// -------
//     A traffic monitoring system categorizes vehicle speeds into different zones (e.g., slow, normal, fast, excessive) for analysis.
//     This ladder checks vehicleSpeed against predefined ranges. Each else if condition is evaluated in order, assigning a classification as soon as a condition is met.
//     Note : take the speed input from the user based on decide the classification. if the vehicle speed is less than 30 its slow, if it is greater than 30 and less than 60 then its normal , if it is greater than 60 and less than 90 its fast, else its Excessive.

//     sample input : vehicleSpeed = 75
//     sample output: Vehicle speed: 75km/h. Classification: fast 
//     sample input: vehicleSpeed = 20;
//     sample output: Vehicle speed: 20km/h. Classification: slow
//     sample input: vehicleSpeed = 100;
//     sample output: Vehicle speed: 100km/h. Classification: Excessive


let vehicleSpeed = +prompt("Enter vehicleSpeed");
if(vehicleSpeed<30)
{
    console.log(`Vehicle speed: ${vehicleSpeed}km/h. Classification: Loyalty Tier: Slow.`);
}else if(vehicleSpeed<60 && vehicleSpeed>=30)
{
    console.log(`Vehicle speed: ${vehicleSpeed}km/h. Classification: Loyalty Tier: Normal.`);
}else if(vehicleSpeed<90 && vehicleSpeed>=60)
{
   console.log(`Vehicle speed: ${vehicleSpeed}km/h. Classification: Loyalty Tier: Fast.`);
}else{
    console.log(`Vehicle speed: ${vehicleSpeed}km/h. Classification: Loyalty Tier: Excessive.`);
}
// ==================================================================================================



// Que 5.   Advanced Product Discount Eligibility (Nested if)
//     An e-commerce site applies a discount if a user is a member AND if their purchase total exceeds a certain amount.
//     The outer if checks for isMember. Only if the user is a member does the inner if check the purchaseTotal. This demonstrates a dependency: the purchase total discount is only relevant for members.
//     Note : You have to achieve this functionality using the nested if
//         1) if the user is member and purchase amount is greater than 200 apply 15% discount.
//         2) if the user is member and purchase amount is greater than 100 apply 10% discount.  
//         3) if the user is member and purchase amount is less than 100 :  Member, but purchase total is too low for an extra discount.
//         4) if the user is not a member and purchase amount is greater than 500 apply 5% discount general discount.
//         5)  if the user is not a member and purchase amount is less than 500 : User is not a member. No member discounts apply.

//     Sample input :     isMember = true
//             purchaseTotal = 250
//     Sample output :  User is a member.
//              Qualifies for a 15% member discount!
//              Original Price: $250.00, Final Price: $212.50
//     Sample input :     isMember = false
//             purchaseTotal = 70
//     Sample output :  User is not a member. No member discounts apply.    
//              Original Price: $70.00, Final Price: $70.00
//     Sample input :     isMember = false;
//             purchaseTotal = 600;
//     Sample output : User is not a member. No member discounts apply.
//             Qualifies for a 5% general discount on large order.
//             Original Price: $600.00, Final Price: $570.00

//Way-1(Else If)
// let isMember = prompt("Enter are you member or not");
// let purchaseTotal = +prompt("Enter Your Total Purchase");
// let discount,finalPrice;
// if(isMember=="true" && purchaseTotal>200)
// {
//    console.log("User is a member and Qualifies for a 15% member discount!");
//    discount = purchaseTotal * (15/100);
//    finalPrice = purchaseTotal-discount;
//    console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
// }else if(isMember=="true" && purchaseTotal>100 && purchaseTotal<=200)
// {
//    console.log("User is a member and Qualifies for a 10% member discount!");
//    discount = purchaseTotal * (10/100);
//    finalPrice = purchaseTotal-discount;
//       console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
// }else if(isMember=="true" && purchaseTotal<100 && purchaseTotal>=0)
// {
//    console.log("Member, but purchase total is too low for an extra discount.");
// }else if(isMember=="false" && purchaseTotal>500)
// {
//    console.log("User is not a member. No member discounts apply.Qualifies for a 5% general discount on large order.");
//    discount = purchaseTotal * (5/100);
//    finalPrice = purchaseTotal-discount;
//    console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
// }else
// {
//    console.log("User is not a member. No member discounts apply.");
//    console.log(`Original Price: $${purchaseTotal}, Final Price: $${purchaseTotal}`);
// }
//-------------------------------------------

//Way-2(Nested If)
let isMember = prompt("Enter are you member or not");
let purchaseTotal = +prompt("Enter Your Total Purchase");
let discount,finalPrice;
if(isMember=="true")
{  
   console.log("User is a member.");
   if(purchaseTotal>200)
   {
      console.log("Qualifies for a 15% member discount!");
      discount = purchaseTotal * (15/100);
      finalPrice = purchaseTotal-discount;
      console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
   }else if(purchaseTotal>100 && purchaseTotal<=200)
   {
      console.log("Qualifies for a 10% member discount!");
      discount = purchaseTotal * (10/100);
      finalPrice = purchaseTotal-discount;
      console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
   }else if(purchaseTotal<100 && purchaseTotal>=0)
   {
      console.log("Member, but purchase total is too low for an extra discount.");
   }else{
      console.log("Invalid Purchase Amount");
   }
}else if(isMember=="false")
{
   console.log("User is not a member. No member discounts apply.");
   if(purchaseTotal>500)
   {
      console.log("Qualifies for a 5% general discount on large order.");
      discount = purchaseTotal * (5/100);
      finalPrice = purchaseTotal-discount;
      console.log(`Original Price: $${purchaseTotal}, Final Price: $${finalPrice}`);
   }
}else{
   console.log("isMember should be true or false");
}
// ==================================================================================================



// Que 6.    Day of the Week Lookup (switch)
//     Display the name of the day based on a numerical representation (e.g., 1 for Monday, 2 for Tuesday).
//     The switch statement evaluates the dayNumber and matches it against case values. Once a match is found, the corresponding code block is executed, and break exits the switch. The default case handles any numbers that don't match.
//     Sample input :  dayNumber = 3
//     Sample output : Day number 3 is: Wednesday  
//     Sample input:    dayNumber = 7
//     Sample output:  Day number 7 is: Sunday
//     Sample input:    dayNumber = 0
//     Sample output :  Invalid Day Number

let dayNumber=+prompt("Enter day number");
switch(dayNumber)
{
   case 1:
      console.log("Day number 1 is: Monday");
      break;
   case 2:
      console.log("Day number 2 is: Tuesday");  
      break;
   case 3:
      console.log("Day number 3 is: Wednesday");
      break;
   case 4:
      console.log("Day number 4 is: Thursday");
      break;
   case 5:
      console.log("Day number 5 is: Friday");
      break;
   case 6:
      console.log("Day number 6 is: Saturday");
      break;
   case 7:
      console.log("Day number 7 is: Sunday");
      break;
   default:
      console.log("Invalid Day Number");
}

// ==============================================================================================================================



// Que 7.  Basic Calculator Operations (Switch)
//     Perform a mathematical operation (addition, subtraction, multiplication, division) based on an operator symbol.
//     The switch statement uses the operator string to determine which calculation to perform on num1 and num2. The default case handles unrecognized operators.
//     Sample input : operator = +,  num1 = 5,num2 = 2; 
//     Sample output : Result of 5 + 2 is: 7    
//     Sample input : operator = * ,  num1 = 5,num2 = 2;
//     Sample output : Result of 5 * 2 is: 10
//     Sample input :  num1 = 8;num2 = 0;operator = /
//     Sample output : Error: Division by zero.
//     Sample input :  operator = % ,  num1 = 8,num2 = 0; 
//     Sample output : Error: Invalid operator.

let operator = prompt("Enter any operator +, -, *, /");
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let result; 
switch(operator)
{
   case '+':   
      result = num1 + num2;
      console.log(`Result of ${num1} + ${num2} is: ${result}`);
      break;
   case '-':
      result = num1 - num2;
      console.log(`Result of ${num1} - ${num2} is: ${result}`);
      break;
   case '*':
      result = num1 * num2;
      console.log(`Result of ${num1} * ${num2} is: ${result}`);
      break;
   case '/':
      if(num2==0) 
      {
         console.log("Error: Division by zero.");
      }
      else{
         result = num1 / num2;
         console.log(`Result of ${num1} / ${num2} is: ${result}`);
      }  
      break;
   default:
      console.log("Error: Invalid operator.");
}
// ==============================================================================================================================