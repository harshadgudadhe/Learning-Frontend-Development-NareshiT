//Lab Day - 6

                                            // # using functions #

// Ques 1 : Basic Password Strength Validator
// Description :
//     Stronger passwords are essential for security. This function will perform two checks: length and character type (digit presence). Both must pass for the password to be considered     "strong enough."
// Steps:
//     - Create a named function called checkPasswordStrength.
//     - It should accept two inputs: password (string) and minLength (number).
//     - First, check if password.length is less than minLength. If so, return false immediately.
//     - Iterate through each character of the password string. For each character, check if it is a digit (e.g., '0' through '9'). Keep a flag (hasDigit).
//     - After checking all characters, if hasDigit is true AND the length check passed, return true. Otherwise, return false.

// Test Cases:
//     Sample Input : password = "abc1234", length = 8
//     Sample Output: 'abc1234' (Min 8): false (too short)
//     Sample Input : password = "password123", length = 8
//     Sample Output: 'password123' (Min 8): true
//     Sample Input : password = "nopassword", length = 8
//     Sample Output: 'nopassword' (Min 8): false (no digit)


let pass = prompt("Enter Your Password ");
let minLength = 8;
checkPasswordStrength(pass,minLength);

function checkPasswordStrength(password, length)
{
   hasDigit = false;
   if(password.length >= length)
   {
        for(let i=0; i<password.length; i++)
        {
            let ch = password.charAt(i);
            if(ch >= '0' && ch<='9') 
            {  
                hasDigit = true; 
            }
        }
        if(hasDigit)
        {
            console.log("Strong Password");
        }else{
            console.log("False (No Digit)");
        }
   }else{
           console.log("Too Short");
   }
        
}
// ==================================================================================================


// Ques 2: Character Type Analyzer (Word Contains Vowel & Consonant)
//     Create a function that checks if a single given word contains at least one vowel AND at least one consonant (non-vowel letter).
// Steps:
//     - Create a named function called analyzeWordForVowelConsonant.
//     - It should accept one input: word (a string).
//     - Initialize two boolean flags: hasVowel and hasConsonant to false.
//     - Loop through each character of the word.
//     - Convert each character to lowercase.

// Character Type Check:
//     - If the character is a vowel (a, e, i, o, u), set hasVowel to true.
//     - If the character is a letter but NOT a vowel, set hasConsonant to true.
//     - If both hasVowel and hasConsonant become true at any point, you can break the loop early as the condition is met.
//     - After the loop, return hasVowel && hasConsonant.

// Test Cases : 
//     Sample Input : word = "hello"
//     Sample Output: 'hello': The string contains vowels and consonants
//     Sample Input : word = "rhythm"
//     Sample Output: 'rhythm': The string contains only consonants
//     Sample Input : word = "AEIOU"
//     Sample Output: 'AEIOU': The string contains only vowels
//     Sample Input : word = "BCD"
//     Sample Output: 'BCD': The string contains only consonants    






// ==================================================================================================   



// Ques 3 : Basic String Reverser    (Function Expression)
// --------
//     - Create a function expression that reverses a given string. For example, "hello" becomes "olleh".
// Steps:

//     - Assign an anonymous function to const reverseString.

//     - It accepts one string parameter: inputString.

//     - Create an empty string reversedString.

//     - Loop through inputString from its last character down to the first.

//     - In each iteration, get the current character and append it to reversedString.

//     - Return the reversedString.

// Test Cases:
//     Sample input : Original: 'hello'
//     Sample Output: Original: 'hello' -> Reversed: 'olleh'

//     Sample input : Original: 'JavaScript'
//     Output: Original: 'JavaScript' -> Reversed: 'tpircSavaJ'



// ==================================================================================================



// Ques 4 :    Simple Username Case Converter    (Arrow Function)--------
//     - Create an arrow function that takes a username string and returns it converted to all lowercase for standardization.
// Steps:

//     - Define the Arrow Function: Assign it to a const variable toLowercaseUsername.

//     - It accepts usernameString.

//     - Use usernameString.toLowerCase().

//     - Implicitly return the result.


// Test Cases:
//     Sample input : Original 'AliceSmith'
//     Sample Output: alicesmith

//     Sample input : Original 'JOHN_DOE'
//     Sample Output: Output: john_doe






//====================================================================================================