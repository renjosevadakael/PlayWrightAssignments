/*Assignment Details:  
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
palindrome, then test your function with various strings and print the results. 
 
Assignment Requirements:  
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
 2. Return true if same, else the false. */


 function reverseString(initString){
    let reverseStr="";
    let arrayInitialString = initString.split("");
    console.log(arrayInitialString);
    for(let index= arrayInitialString.length-1;index >=0;index--){
        reverseStr= reverseStr+arrayInitialString[index];

    }
    console.log(reverseStr);
    return reverseStr;
 }

 function checkPalindrome(initStr,revStr)
 {
    let flag=true;
if(initStr===revStr){

    console.log(`${initStr} and ${revStr} matches. Hence Palindrome`);
        return flag
    }
        else{
            flag=false;
            console.log(`${initStr} and ${revStr} are different. Hence not Palindrome`);
            return flag;
        }
 }

 // Declare intial string
// Check if palindrome
 let initialString='MALAYALAM'
 let reversedString = reverseString(initialString);
 let result= checkPalindrome(initialString,reversedString);

 // Check not  palindrome
  initialString='FRENCH'
  reversedString = reverseString(initialString);
  result= checkPalindrome(initialString,reversedString);

