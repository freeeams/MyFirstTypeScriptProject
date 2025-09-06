// if the username 0 is ending with 123 then replace it without 123 version
// 'alice123' -> 'alice'
// if the username is starting with lowercase 'b' then replace it with uppercase
// "bob456" -> "Bob456"

// Create an array of test case names
// If test case at index 0 contains underscore then replace underscore with space
// "login_test" -> "c"
// If test case at index 1 is all uppercase then convert to title case
// "SEARCH_functionality" -> "Search_functionality"
// If test case at index 2 contains hyphen then replace with underscore
// "checkout-process" -> "checkout_process"
// Print the formatted test cases array

// let testCases1: string[] = ["login_test", "SEARCH_functionality", "checkout-process", "Payment_Gateway"];
// if(testCases1[0].includes('_')){
//     testCases1.splice(0,1,'login test')
// }if(testCases1[1].toUpperCase() ===testCases1[1]){
//     testCases1.splice(1,1 ,'Search_functionality')
// }if(testCases1[2].includes('-')){
//     testCases1.splice(2,1, 'checkout_process')
// } console.log(testCases1)


// // Create an array: [" 500 USD", " 20 ", "true", "junior", "150USD"]
// // Remove spaces from the first element, extract the number, subtract 100 ( - )
// // Trim the second element, convert to number, divide by 2
// // Convert the third element to boolean and negate it (true → false)
// // Replace the fourth element with "Senior"
// // Extract number from the last element, add 50
// // Print each result and the final array

// let veriable = [" 500 USD", " 20 ", "true", "junior", "150USD"];
// let veriable1 = veriable[4].slice(1,3) 
// let veriable11 = parseFloat(veriable1) +50

// veriable.splice(4,1,'senior')

// let veriable0 = [" 500 USD", " 20 ", "true", "junior", "150USD"];
// let veriSec = veriable0[1].trim()
// let veriSec2 = parseFloat(veriSec)/2

// Start with: ["100USD", "temporary", "false", "80"]
// Remove "temporary" from the array
// Insert "permanent" at index 1
// Convert "100USD" to number, subtract 40
// Replace "false" with "true"
// Add "bonus:20" at the end using splice
// Extract the number from "bonus:20" and multiply by 3

// let wer=["100USD", "temporary", "false", "80"]
// wer.splice(1,1)
// wer.splice(1,0,"permanent")
// let myHund=wer[0].slice(0,3)
// let myHund1=parseFloat(myHund) -40
// wer.splice(1,1,'true')
// wer.splice(3,0,'bonus:20')
// let lastNum=wer[3].slice(6,8)
// let goodNum=parseFloat(lastNum) *3


// Task: Create arraysc and priorityTests. Start with regularTests: ["login-test", "ui-test", "api-test"]. 
// Check if it includes "login-test" - if yes, move it to priorityTests using splice.
//  Add "database-test" to regularTests. Insert "smoke-test" at the beginning of priorityTests. 
// Replace the last item in regularTests with "integration-test".
//  Print both arrays and their combined length.

// Skills practiced: Basic splice operations, includes(), moving between arrays






// let priorityTests:(string)[]=[];
// let regularTest: (string)[]=["login-test", "ui-test", "api-test"];
// if(regularTest.includes('login-test')){
//     priorityTests.splice(0,0,'login-test')
// } 
// regularTest.push('database-test');
// let variable1 = priorityTests.splice(0,1,'smoke-test');
// regularTest[1].replace('api-test', 'integration-test');

// console.log(priorityTests,regularTest)




// Task: Create connections: ["mysql-prod", "redis-cache", "mongo-dev"]
// and activeConnections: empty. Check the first connection (index 0) -
// if it includes "mysql", move it to activeConnections and add "SECURED-"
// prefix. Check the second connection (index 1) - if it includes "redis",
// replace it with "redis-cluster". Add "postgres-test" to connections.
// Insert "monitor-connection" at the beginning of activeConnections.
// Remove the last connection from activeConnections and add "BACKUP-"
// prefix to it. Calculate total connections.


let connection: (string)[] = ["mysql-prod", "redis-cache", "mongo-dev"];
let activeConnections: (string)[] = [];
if (connection[0].includes('mysql')) {
    let veriable = connection.splice(0, 1)[0]
    activeConnections.push("SECURED-" + veriable)
} if (connection[1].includes("redis")) {
    connection.splice(connection.indexOf('redis-cache'), 0, 'redis-cluster')
}
connection.push("postgres-test");
activeConnections.splice(0, 0, "monitor-connection");
let veriable21 = activeConnections.pop();
veriable21 = ("BACKUP-" + veriable21);

console.log(connection.length + activeConnections.length)

// Question 7: Test Data Validation Pipeline
// Difficulty: :star::star:☆☆☆
// Create rawData: ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
// and cleanData: empty. For each item in rawData, check if it includes "valid" -
// if yes, move it to cleanData and replace "valid" with "verified". Insert "data-header"
//  at the beginning of cleanData. Remove the last item from rawData and add "processed-"
// prefix before adding to cleanData. Print the processing results.
// Skills practiced: String manipulation with arrays, conditional moving, prefix operations

let rawData: (string)[] = ["valid-email", "invalid-phone", "valid-address", "corrupt-data"];
let cleanData: (string)[] = [];
if (rawData[0].includes('valid')) {
    let veriable1 = rawData.splice(0, 1)[0]
    cleanData.push(veriable1)
}
if (rawData[2].includes('valid')) {
    cleanData.push()
    cleanData.splice(rawData.indexOf('valid'), 0, 'verified')
}

cleanData.splice(0, 0, 'data-header');
let veriable000 = rawData.pop();
veriable000 = ("processed-" + veriable000);
console.log(rawData)
console.log(cleanData)

