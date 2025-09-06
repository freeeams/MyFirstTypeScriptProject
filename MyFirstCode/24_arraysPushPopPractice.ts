// let car =[ 'Toyota','Porsche','BMW']
// let firstCar =car[0]
// let secondCar =car[1]
// let thirdCar = car[2]

// console.log(firstCar)
// console.log(secondCar)
// console.log(thirdCar)

// let salih =[ 'Salih','Aydin',99,true]
// let salihLth = salih.length
// console.log(salihLth)






// // 1. Create an empty shopping list array

// // 2. Add 5 items to your list using push()
// // Your code here...
// // 3. Display the length of your list
// // Your code here...
// // 4. Remove the last item using pop()
// // Your code here...
// // 5. Display your final list
// // Your code here...
// let shoppingList = ['eggs','sugar','oil','salt','orange'];
// let shoppingList1 = shoppingList.push('cucumber','tomato');
// console.log(shoppingList)
// console.log(shoppingList.length)
// let shoppinglist2 = shoppingList.pop()
// console.log(shoppingList)

// let avalaibleCar:(string | number | boolean)[] =[''];
// avalaibleCar.push( 'Mazda','Subaru','Infinity');
// console.log(avalaibleCar)
// avalaibleCar.push('mercedes','masseratti')
// let avalaibleCar1 = avalaibleCar.push('saab')
// console.log(avalaibleCar)




// let testCases: string[] = []
// let testCaseNumber = testCases.push('Login Test')
// console.log(testCaseNumber)
// testCaseNumber = testCases.push('Search Test')
// console.log(testCaseNumber)


// testCaseNumber = testCases.push('check out test')

// console.log(testCases)

// console.log(testCases.length)



// // Create it empty first
// // Then add your first pet name
// // Print the new length
// // Then add the second pet name
// // Print the new length
// // Print the array itself
// // Remove the last pet
// // Print the removed pet
// // Print the array itself
// // Print the length of the new array

// let petVariable: string[] =[];
// petVariable.push('Fifi');
// console.log(petVariable.length)
// console.log(petVariable.push('Ozzi'))
// console.log(petVariable.length)
// console.log(petVariable)
// petVariable.pop()
// console.log(petVariable.pop)
// console.log(petVariable)
// console.log(petVariable.length)




// 1. Create an empty array called mixedData that can hold any data type
// 2. Add your name (string) using push()
// 3. Add your age (number) using push()
// 4. Add true or false if you like coding (boolean) using push()
// 5. Add the text "student" using push()
// 6. Add the number 100 using push()
// 7. Print the array itself
// 8. Print "My name is [name]" using index 0
// 9. Print "I am [age] years old" using index 1
// 10. Print "Do I like coding? [true/false]" using index 2
// 11. Print "My role is [role]" using index 3
// 12. Print "My score is [score]" using index 4
// 13. Print the first item (index 0) and the last item (calculate using .length)
// 14. Print "Array has [number] different pieces of information"
// 15. Remove the last item using pop() and print what was removed

// let mixedData :( string|number|boolean)[]=[];
// mixedData.push('Dima');
// mixedData.push(28);
// mixedData.push(true);
// mixedData.push('student');
// mixedData.push(100);
// console.log(mixedData);
// console.log('My name is '+mixedData[0]);
// console.log('i am '+mixedData[1]+' years old');
// console.log('do i like coding'[2]);
// console.log('My role is '+mixedData[3]);
// console.log('My score is '+mixedData[4]);
// console.log(mixedData[0],mixedData[mixedData.length-1]);
// console.log('Array has '+ mixedData.length+ ' different pieces of information');
// console.log(mixedData.pop());


// let students =['Vova','Alina','Tania','Anya','Artem']
// let studentsRmv = students.splice(0,3);
// studentsRmv = students.splice(0)
// console.log(students)

// let playerList =['ronaldo','beckham','shevchenko','buffon','valdes','drogba'];
// let playerList1 = playerList.splice(3,2);
// console.log( playerList1);
// playerList1 = playerList1.splice(0,1);
// console.log(playerList1);
// console.log(playerList)



// Create a browser array and add "Chrome", "Firefox", "Safari", "Edge"
// Remove Safari from  browser array
// you can print here
// Remove Firefox from  browser array
// Remove Chrome from  browser array
// I want to see an array which only has 'Edge'


// let browser : string[]=[];
// browser.push("Chrome", "Firefox", "Safari", "Edge");
// browser.splice(2,1);
// browser.splice(1,1);
// browser.splice(0,1);
// console.log(browser)



// Pet store animals

// TODO: Remove "bird" from the store (it got adopted!)
// TODO: Add "hamster" between "cat" and "fish"

let pets2 = ["dog", "cat", "bird", "fish"];
pets2.splice(2, 1);
pets2.splice(2, 0, 'humster')

let pets3 = pets2.splice(4, 0, 'dog')




// // Movie playlist

// TODO: Add "New Comedy" after "Old Comedy"
// TODO: Add "Horror Movie" at the beginning (index 0)
// TODO: Add "Documentary" at the end using splice()
// TODO: Remove the middle movie

// let movies = ["Action Movie", "Old Comedy", "Drama"];
// movies.splice(2,1,"New Comedy");
// movies.splice(0,0,'Horror Movie');
// movies.splice(5,0,'Documentary')
// movies.splice(3,1)
// console.log(movies)




// I want to replace "Old Comedy" with "New Comedy"
// I want you guys to replace the "Drama" with "No Drama Lama"


let movies77 = ["Action Movie", "Old Comedy", "Drama"];
movies77.splice(0, 3, "homework")
console.log(movies77)





let testQueue: (string)[] = [];
testQueue.push("Login Test", "Search Test", "Cart Test", "Payment Test", "Logout Test")
console.log(testQueue.length)



// ## **Question 6: Shopping Cart Priority Management**
// **Difficulty**: :star::star:☆☆☆
// Create arrays `regularItems` and `priorityItems`. Start
// with regularItems: `["milk", "bread", "eggs"]`. Check if it includes
// "bread" - if yes, move it to priorityItems using splice. Add "cheese"
// to regularItems. Insert "urgent-medicine" at the beginning of priorityItems.
// Replace the last item in regularItems with "organic-eggs". Print both arrays
// and their combined length.
// **Skills practiced**: Basic splice operations, includes(), moving between arrays

// let regularItems : string[] =["milk", "bread", "eggs"];
// let priorityItems : string[]= [];
// if(regularItems.includes('bread')){
//     regularItems.splice(1,1)
//     priorityItems.push('bread')
// }
// regularItems.push('cheese');
// priorityItems.splice(0,0,'urgent-medicine');
// regularItems.pop();
// regularItems.splice((priorityItems.length-1),0,'organic-eggs');

// console.log(regularItems,priorityItems,(regularItems.length +priorityItems.length))





// Create three arrays: `pending`: `["app-v1", "api-v2"]`,
// `deploying`: empty, `deployed`: empty. Move the first pending item to deploying.
// Replace "v1" with "v1.1" in any array that contains it. Add "database-v1" to pending.
// If deploying length equals 1, move its item to deployed and add "SUCCESS" suffix (put it before).
// Insert "MONITOR" at the beginning of deployed. Show the deployment pipeline status.
// **Skills practiced**: Multi-array management, conditional operations, string replacement

let pending: (string)[] = ["app-v1", "api-v2"];
let deploying: (string)[] = [];
let deployed: (string)[] = [];
pending.splice(0, 1);
deploying.push("app-v1");
deploying.splice(0, 1, "app-v1.1")
pending.push("database-v1");
if (deploying.length === 1) {
    deploying.splice(0, 1)
    deployed.splice(deployed.length, 0)
}
deployed.splice(0, 0, "MONITOR");
console.log(pending)
console.log(deploying)
console.log(deployed)


// Start with `lowBugs`: `["ui-glitch", "typo-fix", "color-issue"]`, `mediumBugs`: `["login-slow"]`,
//  `criticalBugs`: empty. Check each lowBug - if it includes "glitch", move it to mediumBugs and add
//  "urgent-" prefix. Replace lowBugs containing "fix" with "patch-required". If mediumBugs length > 1,
//   move the first one to criticalBugs. Insert "ESCALATED" at the beginning of criticalBugs.
//   Add "new-report" to lowBugs and remove the last criticalBug. Calculate total bugs across all severities.
// **Skills practiced**: Complex conditional logic, prefix/suffix operations, manual array checking
// if {"ui-glitch" containing} then  if yes replace 'path required'
// if {"typo-fix" containing} then  if yes replace 'path required'
// if {"color-issue" containing} then  if yes replace 'path required'

let lowBugs: (string)[] = ["ui-glitch", "typo-fix", "color-issue"];
let mediumBugs: (string)[] = ["login-slow"];
let criticalBugs: (string)[] = [];
if(lowBugs[0].includes('glitch')){
    mediumBugs.splice(1,0,'urgent-'+lowBugs.splice(0,0))
    
} if(lowBugs[1].includes('glitch')){
    mediumBugs.splice(0,1)
}


















