// //Que 1.    Calculating Sum of First 'N' Numbers

//      Calculate the total sum of all positive integers up to a given number 'N'.
//  The for loop iterates from 1 up to N. In each iteration, it adds the current number (i) to totalSum, effectively summing all numbers in the range.
//     Sample input : 5
//     Sample output : --- Summing Numbers from 1 to 5 ---
//             Adding 1. Current sum: 1
//             Adding 2. Current sum: 3
//             Adding 3. Current sum: 6
//             Adding 4. Current sum: 10
//             Adding 5. Current sum: 15
//             Total sum of first 5 numbers is: 15
//Solution:

//   let givenNumber = +prompt("Enter Stooping Point");
//   let sum=0;
//   while(givenNumber>0)
//   {
//     sum += givenNumber;
//     givenNumber--;
//   }
//   console.log(sum);


// ==================================================================================================

// Que 2.     Displaying Progress Bar Segments
// -------
//      Render a visual progress bar by displaying a fixed number of segments.

// - The for loop iterates for a predefined number of segments. Each iteration adds one segment, building a visual representation of progress.

//     Sample input : totalSegments = 5, segmentCharacter = *
//     Sample output : --- Rendering Progress Bar ---
//             Progress: *
//             Progress: **
//             Progress: ***
//             Progress: ****
//             Progress: *****
//             --- Progress Bar Complete ---

//     Sample input :  totalSegments = 10, segmentCharacter =    =
//     Sample output :  --- Rendering Progress Bar ---
//             Progress: =
//             Progress: ==
//             Progress: ===
//             Progress: ====
//             Progress: =====
//             Progress: ======
//             Progress: =======
//             Progress: ========
//             Progress: =========
//             Progress: ==========
//             --- Progress Bar Complete ---
//Solution:

// let totalSegments = +prompt("Enter TotalSegments");
// let segmentCharacter = "="
// for(let i=1; i<=totalSegments; i++)
// {
//    let str1="";
//    for(let j=1; j<=i; j++)
//    {
//     str1 += segmentCharacter;
    
// }
// console.log("Progress: "+str1);
// }

// ==================================================================================================


// Que 3.    Basic Password Complexity Checker (Fixed Length)
//      When a user sets a new password, check if it meets minimum complexity rules for a fixed length password, specifically requiring at least one digit and one uppercase letter.
//      The for loop iterates through each character of the passwordString (whose length is known and fixed for this scenario). Inside the loop, if statements check if each character is a digit or an uppercase letter. The counters are updated, and finally, a decision is made based on these counts.

//     Sample input :    password = Pass123
//     Sample output: --- Password Complexity Check for 'Pass123' ---
//             Password strength: Strong (Contains digit and uppercase).
//             --- Check Complete ---

//     Sample input : test123
//     Sample output: --- Password Complexity Check for 'test123' ---
//             Password strength: Medium (Contains digit and lowercases).
//             --- Check Complete ---

//     Sample input : UPPERCASE
//     Sample output: --- Password Complexity Check for 'UPPERCASE' ---
//             Password strength: Medium (Contains uppercases).
//             --- Check Complete ---

//     Sample input : GoodPass1
//     Sample output: --- Password Complexity Check for 'GoodPass1' ---
//             Password strength: Strong (Contains digit and uppercase).
//             --- Check Complete ---

// Solution:
// let password = prompt("Enter New Password"); // Change this value to test other samples
// console.log(`--- Password Complexity Check for '${password}' ---`);
// let hasDigit = false;
// let hasUpper = false;
// let hasLower = false;
// for (let i = 0; i < password.length; i++) {
// 	let ch = password[i];
// 	if (ch >= '0' && ch <= '9') hasDigit = true;
// 	else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
// 	else if (ch >= 'a' && ch <= 'z') hasLower = true;
// }
// if (hasDigit && hasUpper) 
// {
// 	console.log("Password strength: Strong (Contains digit and uppercase).\n--- Check Complete ---");
// } else if (hasDigit && hasLower) 
// {
// 	console.log("Password strength: Medium (Contains digit and lowercases).\n--- Check Complete ---");
// } else if (hasUpper) 
// {
// 	console.log("Password strength: Medium (Contains uppercases).\n--- Check Complete ---");
// } else 
// {
// 	console.log("Password strength: Weak.\n--- Check Complete ---");
// }

// ==================================================================================================

// Que 4.  Estimating Probability with Fixed Number of Trials
// ------
//      Simulate a simple coin toss experiment for a fixed number of trials to estimate the probability of getting heads.

// -  The for loop runs for numberOfTrials. In each iteration, Math.random() simulates a coin toss. It counts the number of "heads" (random number < 0.5), allowing for a simple probability estimation.

//     Note : using the number of fixed iterations of for loop you have to count the number of heads you got between the 1 to N and calculate the average. generate the random number using the Math.random() function if the generated value id less than 0.5 its heads else its tails if you got the head increment the head count.


//     Note : Testcases may vary the output will not be same every time because random value will be generated.

//         sample input : numberOfTrials = 50
//         sample output:  50 Coin Toss Trials
//                 Total Heads: 19
//                 Estimated Probability of Heads: 38.00%

//         sample input : numberOfTrials = 1000
//         sample output:  1000 Coin Toss Trials
//                 Total Heads: 495
//                 Estimated Probability of Heads: 49.50%

let numberOfTrials = +prompt("Enter Number of Trials");
let heads = 0;

for(let i=0; i<=numberOfTrials; i++)
{
   if(Math.random()<0.5)
   {
    heads++;
   }
}
let probability = numberOfTrials/heads;
console.log("No. of heads "+heads);
console.log("Probability of heads"+probability);


//