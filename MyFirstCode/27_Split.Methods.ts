// Given:
// "The quick brown fox"
// Your task: Use split() to create an array of words
// let sentence = "The quick brown fox";
// let words = sentence.split("___");  // Replace "___" with something right
// console.log(words);
// I want to have this -> ['The','quick','brown','fox']


// let sentence = "The quick brown fox";
// let words = sentence.split(",");
// console.log(words)


// let userData = "Alice,30,QA Engineer,Premium";
// let userDetails = userData.split(","); 
// console.log(userDetails);



// let urlPath = "home-products-electronics-laptops";
// let navigationPages = urlPath.split("-");  
// console.log(navigationPages);

// "testuser@gmail.com"
// Your task: Separate the username from the domain
// let email = "testuser@gmail.com";
// let emailParts = email.split("___");  // What separator?
// print 'username = testuser'
// print 'domain = gmail.com'

// let email = "testuser@gmail.com";
// let emailParts = email.split("@");
// let emailParts2 = 
// console.log('username =' + emailParts[0])
// console.log('domain='+  emailParts[1])


// let me = 'Salih,25,Aston Martin Vantage'
// let meSplit = me.split(",")
// console.log(meSplit)
// console.log("MY NAME IS " + meSplit[0]);
// console.log("i`am " + meSplit[1] + "years old");
// console.log("my favotire car is " + meSplit[2]);


// let daysOfTheWeek: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// for (let i = 0; i< daysOfTheWeek.length; i++) {
// if (daysOfTheWeek[i] === 'tuesday') {
//     console.log(daysOfTheWeek[i])
// } else {
//     console.log('soory its not')
// }
// }


// we are going to the dealer
// inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// if the current car is starting with 'Porsche'
// then print 'This is what I am looking for Porsche Taycan'
//


// let inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera'];
// for(let i=0; i< inventory.length; i++){
// if(inventory[i].includes('Camry')){
//     console.log(inventory[i])
// }else{
//     console.log('NO')
// }
// }

// we are a bouncer in front of a club
// we do not let people who are younger than 21
// age = [15, 16, 77, 99, 29, 18, 21]
// when there is someone older or equal to 21
// we should say 'WELCOME'
// otherwise 'Bugger off, get out!'


// let age = [15, 16, 77, 99, 29, 18, 21];
// for(let i=0; i<age.length; i++){
// if(age[i]>=21){
//     console.log('WELCOME')}
//     else{
//         console.log('Bugger off, get out! ')
//     }
// }


// I have fruits string = 'cherry,orange,mango,banana'
// check every fruit and if it's including letter 'a'
// we are eating that fruit
// otherwise we are throwing it to trash


// let fruitsString = ('cherry,orange,mango,banan');
// let fruitsString1=fruitsString.split(',')
// for(let i=0; i<fruitsString.length; i++){
//     if(fruitsString[i].includes('a')){
//         console.log('We are eating this fruit')
//     }else{
//         console.log('We are throwing to trash')
//     }
// }


// We have fruits stored as a comma-separated string
// Your mission:
// You need to examine each fruit individually
// For fruits that contain the letter 'a' → display "EATING: [fruit name]"
// For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"
// Think about:
// - How can you work with each fruit separately?
// - How can you check every fruit one by one?
// - How can you determine if a fruit contains a specific letter?

let fruits: string = 'apple,kiwi,mango,pear';
let fruitsSeparated = fruits.split(',');
for(let i=0; i<fruits.length; i++){
    if(fruits[i].includes('a')){
        console.log('EATING:'+ fruits[i] )
    }else{
        console.log('THROWING AWAY:'+fruits[i])
    }
}


// ★★☆☆☆ (2/5)
// We have drinks stored as a comma-separated string
// Your mission:
// You need to examine each drink and categorize them with these priorities:
// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"
// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]"
// - Everything else → display "SKIPPING: [drink name]"
// Think about:
// - How can you work with each drink separately?
// - How can you check multiple conditions in order of importance?
// - How can you determine what letter a word begins with?
// - What happens when a drink matches multiple conditions?

// let drinks: string = 'cola,water,tea,juice,milk';
// let drinksSeparated = drinks.split(',');
// for(let i=0; i<drinksSeparated.length; i++){
// if(drinksSeparated.includes('a')){
//     console.log('DRINKING:' +drinksSeparated.length[i])
    
// }else if(drinksSeparated[i].startsWith('t')){
//     console.log('TASTING: '+ )
// }
// }

// I am checking cars
// carsOnline = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// savedCars = []
// check every single car -> loop
// check the current car -=> dynamic if
// and if the current car is what I am looking for 'Porsche'-> if true
// then I save -> push, splice
// What I saved = []
// How many cars I saved






let carsOnline1 = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
let savedCars1:string[] = []
for(let i=0;i<(carsOnline1.length);i++){
    if(carsOnline1[i].includes('Camry')){
        console.log(savedCars1.push(carsOnline1[i]))
    }
}
console.log(savedCars1)
console.log(savedCars1.length)










