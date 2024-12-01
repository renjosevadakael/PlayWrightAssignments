/*Assignment Details:  
Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25 
 
Assignment Requirements:  
 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode 
 2. Call that function from the javascript*/


 // Function to check for Odd numbers
 function printOddNumbers()
 {
    
    console.log('Odd Numbers between 1 and 25 are -');
    for(number=1; number <=25 ;number ++){
    if(number%2!==0)
    {

        console.log(` ${number} `)
    }
    
 }
}

 //  invoke function to check Odd
 printOddNumbers();

 
