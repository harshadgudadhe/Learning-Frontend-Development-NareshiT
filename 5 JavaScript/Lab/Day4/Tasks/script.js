//JavaScript Tasks

// Que 1. Countdown Timer ( while loop )
//      Implement a simple countdown timer that displays numbers decreasing from a starting point until zero.
// - The while loop continues as long as countDown is greater than or equal to 0. In each iteration, it prints the current count and then decrements countDown, moving closer to the loop's termination.

//     Sample input :  countDown = 5
//     sample output : --- Countdown Start ---
//             5
//             4
//             3
//             2
//             1
//             0
//             --- Countdown End ---

//     Sample input : countDown = 3
//     sample output : --- Countdown Start ---
//             3
//             2
//             1
//             0
//             --- Countdown End ---

//     Sample input : countDown = -2
//     Sample output : Loop condition false initially, negative values are not allowed.
//Solutions: 

        // let countDown = +prompt("Enter CountDown");                                 //nitialization
        // if(countDown>0)
        // {
        //   while(countDown >= 0)                                                     //condn
        //   {
        //    console.log(countDown);                                                  //Statement
        //    countDown--;                                                            //Updation
        //   }
        // }else{
        //       console.log("Loop condition false initially, negative values are not allowed.");    
        //     }

// ======================================================================================================================================

// Que 2.  User Login Attempts    (While loop)
//      Allow a user a limited number of login attempts before locking their account.
// - The while loop runs as long as attemptsLeft is greater than 0 and isLoggedIn is false. Each iteration simulates an attempt, decrements the counter, and might update isLoggedIn if successful.
//     Note : you have to write a JavaScript program to allow the user to attempt the login for certain number of times if user fails the every login attempt lock the user account
   
//     Variable :
//             attempts : hardcoded value (number).
//             isLoggedIn : hardcoded Boolean value ( initially false).
//             correctPassword : hardcoded for comparison (string).
//             enteredPassword : user input using the prompt() (string).

//     the while loop will iterate for every failed attempts of login if the password matches to the correct password make the isLoggedIn flag as true and break the loop. if user exceeds the allowed attempts show message to the user his account is locked due to failed attempts.
//     sample input :  
//             attemptsLeft = 3
//             isLoggedIn = false;
//             correctPassword = "secret123"
//             enteredPassword = "secret123"
//     sample output : 
//             Attempt 1: Enter your password. (3 attempts left)
//             Login successful!

//     sample input :  attemptsLeft = 3
//             isLoggedIn = false;
//             correctPassword = "secret123"
//             enteredPassword = "wrongPassword"
//     sample output : 
//             Attempt 1:Enter your password. (2 attempts left)
//                 Incorrect password. Please try again.
//             Attempt 2:Enter your password. (1 attempts left)
//                 Incorrect password. Please try again.
//             Attempt 3: Enter your password. (0 attempts left)
//                 Incorrect password. No attempts left. Account locked.
//Solutions: 

// let attemptsLeft = 3;
// let isLoggedIn = false;
// let correctPassword = "secret123"

// while(attemptsLeft>0)
// {
//     let enteredPassword = prompt(`Enter Your Password. ${attemptsLeft--} attempts left`);   
//     if(enteredPassword == correctPassword)
//     {
//       isLoggedIn = true;
//       if(isLoggedIn==true)
//       {
//         console.log("Login successful!"); break;
//       }
//     }else{
//       if(attemptsLeft>0)
//       {
//         console.log("Incorrect password. Please try again.");
//       }
//       else{
//         console.log("Incorrect password. No attempts left. Account locked.");
//       }
//     }
// }
// =============================================================================================================================================


// Que 3. Reading Data Until a Specific Value (while loop)
//     Process incoming data or user input until a specific "stop" value is encountered.
//     dataInput simulates receiving data. The while loop continues as long as dataInput is not "STOP". This is common for processing streams of information where the end isn't fixed.

//     iterate the loop until user enter stop while receving the inputs from the user, if user enters other values continue the loop.
//     take the inputs from the user inside the while loop until user enters 'Stop'.

//     sample output :
//             --- Data Processing Start ---
//             Processing data: READ DATA
//             Processing data: READ DATA
//             Processing data: ANOTHER DATA POINT                 // after this user enters the 'Stop' and loop breaks
//             --- Data Processing Complete. Total items: 3 ---
//Solutions:

        // let data = 1;
        // while(data != 0)
        // {
        //   data = +prompt("Processing data: ");
        //   console.log("Loop Not Stopped");
        // }
        // console.log("Loop Stopped");

// =================================================================================================================================================

// Que 4.  Resource Loading Until Completion    (while loop)
//      Simulate loading a resource (e.g., an image, a game level) that takes multiple steps, continuing until loading is 100% complete.
//      The while loop continues as long as loadProgress is less than 100. It increments the progress by a random amount (simulated here) until the condition is met.

//     Note : Use the Math.random() function to generate the random value for loadProgress, if the loadProgress is greater than 100 break the loop.
//     constraints :  let increment = Math.floor(Math.random() * maxLoadIncrement) + 5; // formula to generate the random progress number.

//     sample input :  
//             loadProgress = 0
//             maxLoadIncrement = 25

//     sample output : --- Resource Loading Started ---
//             Loading... 27%
//             Loading... 50%
//             Loading... 63%
//             Loading... 79%
//             Loading... 100%
//             --- Resource Loading Complete! ---




// ==================================================================================================

// Que 5.    Generating Random Numbers Until a Target is Met
//      In a simple simulation or game, generate random numbers until a specific target value is reached.
// - The while loop keeps generating currentNumber using Math.random() until it equals targetNumber. This demonstrates a loop where the number of iterations is entirely unpredictable.
//     constraints :  Math.floor(Math.random() * 10) + 1
   
//     sample input :   targetNumber = 7
//              currentNumber = 0
//              attempts = 0

//     sample output :
//             --- Generating Random Number ---
//             Attempt 1: Generated 10
//             Attempt 2: Generated 10
//             Attempt 3: Generated 4
//             Attempt 4: Generated 3
//             Attempt 5: Generated 8
//             Attempt 6: Generated 2
//             Attempt 7: Generated 6
//             Attempt 8: Generated 8
//             Attempt 9: Generated 7
//             --- Target number 7 reached in 9 attempts! ---

        let targetNumber = +prompt("Enter Target Number");
        let currentNumber = Math.floor(Math.random() * 10) + 1; 
        let attempt=0;
        while(targetNumber != currentNumber)
        {
            console.log(`Attempt ${attempt++}:Generated Number is : ${currentNumber}`);
            console.log("Not Matched");
            currentNumber = Math.floor(Math.random() * 10) + 1; 
        }
        console.log(`Attempt ${attempt++}:Generated Number is : ${currentNumber}`);
        console.log(`--- Target number ${targetNumber} reached in ${attempt} attempts! ---`);
//===================================================================================================================