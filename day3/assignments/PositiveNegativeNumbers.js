/*Assignment Details:  
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type. 
 
Assignment Requirements:  
1. Create a function named that takes a number as a parameter. 
2. Declare and initialize the variable. 
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, 
and to handle the case when the number is zero. 
4. Return the corresponding string value for each case. 
5. Call the function and print the result. */

// function to check the number is zero, postive or negative
function verifyNumber(number){
let result;
if(number >0){
result="positive";
}
else if (number <0){
    result="negative"  ;
}
else{
    result="zero";

}
return result;
}
// declare number and invoke function
let num = 100;
console.log(verifyNumber(num));
num=0;
console.log(verifyNumber(num));
num=-100;
console.log(verifyNumber(num));
