/*Assignment Details:  
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. 
 
Assignment Requirements:  
1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result.*/

// function declarartion for grade calculation
function gradeCalculation(score){
let grade; 
switch (true){

    case score >=90:
        grade='A';
        break;
    case score >=80:
        grade='B';
        break;
    case score >=70:
        grade='C';
        break;
    case score >=60:
        grade='D';
        break;
    default:
        grade='F';
        break;
           

}
return grade;

}

// declare score and invoke function
let studScore = 91;
let studGrade= gradeCalculation(studScore);
console.log(`Student Score is ${studScore} and Grade is ${studGrade}`)

 studScore = 78;
 studGrade= gradeCalculation(studScore);
console.log(`Student Score is ${studScore} and Grade is ${studGrade}`)


 studScore = 67;
 studGrade= gradeCalculation(studScore);
console.log(`Student Score is ${studScore} and Grade is ${studGrade}`)

studScore = 56;
 studGrade= gradeCalculation(studScore);
console.log(`Student Score is ${studScore} and Grade is ${studGrade}`)