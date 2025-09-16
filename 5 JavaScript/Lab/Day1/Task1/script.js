// Que 1 :  Write a 'JavaScript' program to print student details using console.log() function only.
// -------

// Sample Output : Name = Rohit Sharma
//                 Roll No = 1001
//                 Branch = B. Tech
//                 Address = Hyderabad
//                 Collage Name = Naresh It


let name="Harshad Gudadhe"
let rollNo=1002;
let branch = "MCA";
let address = "Hyderabad";
let collageName = "IPS ACADEMY";

console.log("Name = "+name);
console.log("RollNo = "+rollNo);
console.log("Branch = "+branch);
console.log("Address = "+address);
console.log("Collage Name = "+collageName);

//======================================================================================================== 


// Que 2 :  Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.
// -------

// Sample input : a=20, b=10;
// Sample Output :
//                Addition is : 30
//                subtraction is : 10
//                Multiplication is : 200
//                Division is : 2
//                Modulation is : 0

let a=20,b=10;
console.log("Addition is : "+(a+b));
console.log("Subtraction is : "+(a-b));
console.log("Multiplication is : "+(a*b));
console.log("Division is : "+(a/b));
console.log("Modulation is : "+(a%b));

// ========================================================================================================


// Que 3 :  Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.
// Sample input : let a = 10, b=20;
// Sample Output : Addition is 30                        


let a1 = 10, b1=20;
let sum = a1 - (-b1);
console.log("Addition is : "+sum);

// ========================================================================================================  



// Que 4 :  Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.
// -------

// Sample input : let number = 23;
// Sample Output : 5
// Explanation : given number is = 23 . so the result is (2+3)=5
// Note : Use Math.floor() function for division.

let num=23;
console.log(Math.floor(num%10)+Math.floor(num/10));
console.log((num%10)+Math.floor(num/10));
                             
// ========================================================================================================      


// Que 5 :  Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
// ( Without using any control statement )
// Sample input : let number = 123;
// Sample Output : 4
// Explanation : given number is = 123 . so the result is (1+3)=4
// Note: Use Math.floor() function for division.

let num1=123;
console.log((num1%10)+Math.floor(num1/100));

                               
// ========================================================================================================

// Que 6 : Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.
// Sample input :
// Side of square is : 5
// Length and breadth of rectangle is : 4 , 5

// Sample output :
// The area of the square with side 5 is: 25
// The area of the rectangle with length 4 and breadth 5 is: 20

let side=5;
console.log("The area of the square with side 5 is: "+side*side);
let lh=4,bh=5;
console.log("The area of the rectangle with length 4 and breadth 5 is: "+lh*bh);

// ========================================================================================================

// Que 7 :  Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.

// Sample input : let a = 10 , b = 20 ;
// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10
                               
let a2=10,b2=20,temp;
console.log(`Before Swapping  : a = ${a2} , b = ${b2}`);
temp=a2;
a2=b2;
b2=temp;
console.log(`After Swapping  : a = ${a2} , b = ${b2}`);
// ========================================================================================================    

// Que 8 :  Write a 'JavaScript' program to swap any two integer number without using third variable and print the output on the console.
// Sample input : let a = 10 , b = 20 ;
// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10
    let a4=10,b4=20;
    console.log(`Before Swapping  : a = ${a4} , b = ${b4}`);
    let temp2=a4+b4;
    a4=temp2-a4;
    b4=temp2-a4;    
    console.log(`After Swapping  : a = ${a4} , b = ${b4}`);                        
// ========================================================================================================  

// Que 9 :  Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.
// Sample input : let a = 26;
// Sample Output : 20
// Note : Use Math.floor() function for division.
   let a3=26;
   console.log(Math.floor(a3/10)*10);      
// ========================================================================================================  

// Que 10 :  Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
// Sample input : let a = 34;
// Sample Output : 40
// Note : Use Math.floor() function for division. 

   let a5=26;
   console.log((Math.floor(a5/10)+1)*10);

// ========================================================================================================