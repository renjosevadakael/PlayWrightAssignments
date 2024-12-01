/*Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript*/


// function for launchBrowser
function launchBrowser(browserName){

    if(browserName==='chrome'){
        console.log('Browser Name is ' + browserName);
    }
    else{
        console.log('Browser Name is not chrome, its ' + browserName);

    }
}
// runTests with Switch - case
function runTests(testType) {

    switch (testType) {
        case 'smoke':
            console.log('TestType is  ' + testType);
            break;
            case 'sanity':
                console.log('TestType is  ' + testType);
                break;
                case 'regression':
                console.log('TestType is  ' + testType);
                break;
        default:
            console.log('TestType is  ' + testType);
            break;
    }
}

// declare browserName and invoke functions
let browserName='chrome';
let testType='none'
launchBrowser(browserName);
runTests(testType);


testType='smoke'
launchBrowser(browserName);
runTests(testType);

 browserName='edge';
 testType='regression'
launchBrowser(browserName);
runTests(testType);
