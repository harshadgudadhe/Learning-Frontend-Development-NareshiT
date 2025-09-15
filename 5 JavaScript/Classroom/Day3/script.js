console.log(Math.random()); 

console.log(Math.round(Math.random()*10000));          // For OTP Generation

console.log(Math.ceil(Math.random()*6));              // Dice - Game 

console.log(Math.ceil(Math.random()*7)+6);            // Random number in between 7-14 



                                                /* String */ 

/* By Prasad Sir */

//Static String
let n= "prasad", y='harsh'; 
console.log('The gandhi said, "Good Night" ', "The time is 5 o'clock", "My name is n"); 
console.log(`this is also a string`);

//Dynamic String
console.log(`my name is ${n}`); 
console.log(`my name is ${y}`); 

//Expression in String
let p=5, q=10;
console.log(`the sum of ${p} and ${q} is ${p+q}`);



//Task : Write in console to print "the total price of 25 apples is 125rs"
let cost=5, quantity=25;
console.log(`the total price of ${quantity} apples is ${cost*quantity}rs`);


//String Methods
let str="JavaScript";
console.log(str.length);                             //10
console.log(str[0])                                  //J
console.log(str[str.length-1])                       //t
console.log(str.toUpperCase());                      //JAVASCRIPT
console.log(str);                                    //JavaScript bcoz string is immutable, original string will not change.
console.log(str.toLowerCase());                      //javascript
console.log(str.charAt(0));                          //J

console.log(str.indexOf("j"));                       //0
console.log(str.indexOf('a'));                       //1
console.log(str.indexOf("a"));                       //3

console.log(str.endsWith("pt"));                     //true
console.log(str.endsWith("Java"));                   //false
console.log(str.startsWith("Java"));                 //true
console.log(str.startsWith("pt"));                   //false

console.log(str.slice(0,4));                         //Java                first  4 characters, last index is excluded.
console.log(str.substring(0,4));                     //Java                 first  4 characters, last index is excluded.
console.log(str.slice(4));                           //Script              It will print from 4th index to end.
console.log(str.substring(4));                       //Script               It will print from 4th index to end.


console.log(str.split('a'));                         // 
str = "Js is so easy"
console.log(str.split(' '));                         // 'JS', 'is', 'so', 'easy'
console.log(str.split(' ').length-1);                // 4-1 = 3
str = "My name is prasad";
// how many vowels --> a e i o u
console.log( str.split('a').length-1 + str.split('e').length-1 + str.split('i').length-1 + str.split('o').length-1 + str.split('u').length-1);


str="        javascript        ";
console.log(str.trim());                             //javascript
str="javasript";
console.log(str.replace('a','x'));                   //jxvascript
console.log(str.replaceAll('a','x'));                //jxvxscript

//boolean
let x=true;
console.log(typeof x);

// undefined is the default value for non-existent  values of  undeclared
let z;
console.log(z,typeof z);                             // undefined means the variable is declared but its not initialised yet.


// diffrence between "undefined" and "not-defined"
let u;                                              //not-defined means the variable is not even declared yet.

//
let v=null;
console.log(v);                                    //

// difference between "undefined" and "null"









/*---------------------------------------------------------------------------------------------------------------------------*/
// String is a collection of characters
/* By Co-pilot*/ 
// // String is a collection of characters
// // String is a primitive data type in JavaScript
// // String is immutable in JavaScript
// // String is a sequence of characters enclosed in single or double quotes
// // String can be created using single quotes, double quotes, or backticks
// let str1 = "Hello World";          // String using double quotes
// let str2 = 'Hello World';          // String using single quotes
// let str3 = `Hello World`;          // String using backticks (template literals)
// // String can contain any characters, including letters, numbers, symbols, and whitespace
// let str4 = "Hello, World! 123 @#$%^&*()"; // String with special characters
// let str5 = 'Hello, World! 123 @#$%^&*()'; // String with special characters
// let str6 = `Hello, World! 123 @#$%^&*()`; // String with special characters

// // String can be empty
// let str7 = "";                    // Empty string
// let str8 = '';                    // Empty string
// let str9 = ``;                    // Empty string

// // String can be created using the String constructor
// let str10 = new String("Hello World"); // String using String constructor
// let str11 = new String('Hello World'); // String using String constructor
// let str12 = new String(`Hello World`); // String using String constructor
// // String can be created using the String() function
// let str13 = String("Hello World"); // String using String() function
// let str14 = String('Hello World'); // String using String() function
// let str15 = String(`Hello World`); // String using String() function
// // String can be created using the String.fromCharCode() method
// let str16 = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100); // String using String.fromCharCode() method
// let str17 = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100); // String using String.fromCharCode() method   
// // String can be created using the String.raw() method
// let str18 = String.raw`Hello World`;    
// // String using String.raw() method
// let str19 = String.raw`Hello World`; 
// // String using String.raw() method
// let str20 = String.raw`Hello World`;
// // String can be created using the String.prototype.toString() method
// let str21 = str1.toString(); // String using String.prototype.toString() method
// let str22 = str2.toString(); // String using String.prototype.toString() method
// let str23 = str3.toString(); // String using String.prototype.toString() method

// // String can be created using the String.prototype.valueOf() method
// let str24 = str1.valueOf(); // String using String.prototype.valueOf() method
// let str25 = str2.valueOf(); // String using String.prototype.valueOf() method
// let str26 = str3.valueOf(); // String using String.prototype.valueOf() method
