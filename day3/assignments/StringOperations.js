/*Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
 
Assignment Requirements:  
Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word. 
 
Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length 
  
 
Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result */



// Combined function to trim space in sentence and to find the length of last word
function findLengthLastWord(sentence){
    let trimmedSentence= sentence.trim();
    let arrayWords= trimmedSentence.split(" ");
    let lenArrayWords= arrayWords.length;
    //console.log(arrayWords)
    //console.log(lenArrayWords)
    lastWord=arrayWords[lenArrayWords-1];
      console.log(`The last Word is '${lastWord}' in '${sentence}' and its length is ${lastWord.length}`)
}
// declare the sentences to test and invoke function
let testSentence = "Hello World";
findLengthLastWord(testSentence);
testSentence="   fly me   to   the moon  ";
findLengthLastWord(testSentence);

// Function to check Anagram
function isAnagram(string1,string2){
    // Trim the strings
let str1= string1.trim();
let str2= string2.trim();
 // Convert strings to same case
 str1 = str1.toLowerCase();
 str2 = str2.toLowerCase();

// Split Strings to array
let arrayStr1= str1.split("");
let arrayStr2= str2.split("");

// Find length of Arrays
let lengthArrayStr1= arrayStr1.length;
let lengthArrayStr2= arrayStr2.length;
// Sort Arrays
arrayStr1.sort();
arrayStr2.sort();

let flag= true;
// Check length of arrays are equal 
if(lengthArrayStr1 === lengthArrayStr2){
    // Iterate through the sorted arrays 
for ( index=0; index<= lengthArrayStr1; index++){
if(arrayStr1[index] !== arrayStr2[index]){
    flag=false;
    break;
}

}

if(flag){
    console.log(`'${string1}' and '${string2}' are Anagram`);
}
else{
    console.log(`'${string1}' and '${string2}' are not Anagram`);

}
}

else{

    console.log('Size mismatch!!!');
    console.log(`'${string1}' and '${string2}' are not Anagram`);
}

}

// Invoke Function to check Anagram with words
isAnagram('listen', 'silent');
isAnagram('listens', 'silent');
isAnagram('hello', 'world');