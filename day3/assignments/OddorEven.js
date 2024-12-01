/*Assignment Details:  
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even. 
 
Assignment Requirements:  
1. Create a function named `isOddOrEven` that takes a number as a parameter   
2. Declare and initialize the variable   
3.  Use a conditional statement to check if the number is divisible by 2  
4. Call the function and print the result */

// Function to check number is even or odd
function isOddOrEven(number){

if(number%2 == 0)
{
    console.log(`The Number ${number} is Even!`);
}
else{
    console.log(`The Number ${number} is Odd!`);
}
}

// Decalre and initialise the number
let num = 10;
// Invoke the function to determine Odd / Even
isOddOrEven(num);
