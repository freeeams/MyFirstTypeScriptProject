let myMatressString = 'My dream matress is &Purple Matress&'
let indexOfFirst : number = myMatressString.indexOf('&')
let indexOfsecond : number = myMatressString.lastIndexOf('&')
console.log(myMatressString.slice(indexOfFirst+1,indexOfsecond))


let myCity : string = 'Welcome to[New York City]!'
let firstIndex : number = myCity.indexOf('[');
let lastIndex : number = myCity.lastIndexOf(']');


let myCityExtracted: string = myCity.slice(firstIndex+1,lastIndex)
console.log(myCityExtracted.length)

    
let myEmail : string = 'Contact me at <hello@example.com'
let fisrtIndexOf : number =myEmail.indexOf('<');
let lastIndexOf : number =myEmail.lastIndexOf('>');
console.log(myEmail.slice(fisrtIndexOf+1,lastIndexOf))


// we are on car.com
// and we see messages just like the example -> 'This car is Mercedes'
// if the car is Mercedes then 'we are going to dealer'
// otherwise 'we keep browsing'
// websiteMessage => 'This car is Mercedes'
// extract -> Mercedes
// check the car if it is Mercedes.

let websiteMessage : string = 'This car is (Mercedes)';
let firstIndexOf: number = websiteMessage.indexOf('(');
let lastIndexOf2 : number = websiteMessage.lastIndexOf(')')

let car: string = websiteMessage.slice(firstIndexOf+1,lastIndexOf2)
let theCar: string ='mercedes'
if(car==='mercedes'){
    console.log('we are going to the dealer')
}else{
    console.log('we arent go to the dealer')
}


// we are on expedia.com
// and we see messages just like the example -> 'This vacation is at -Jamaica-'
// if the location spot is 'Jamaica' OR 'Singapore' then 'we are going to travel'
// otherwise 'we keep browsing'
// websiteMessage => 'This vacation is at -Jamaica-'
// extract -> Jamaica OR Singapore
// check if the vacation location is either Jamaica OR Singapore




let webSiteMessage : string = 'This vacation is at -Jamaica-';
let firstIndexOfVc : number = webSiteMessage.indexOf('-');
let lastIndexOfvc : number = webSiteMessage.lastIndexOf('-');
let vacation : string = webSiteMessage.slice(firstIndexOfVc+1,lastIndexOfvc);
let vacation1 : string = 'Jamaica';
if( (vacation1==='Jamaica')||(vacation1==='Singapore')){
    console.log('we are going to travel')
}else{
    console.log('we keep browsing')
}


// we are on a grocery website
// message: 'Fresh apples at |$3.49| per lb'
// if the price is lower or equal to $5 then 'buy the item'
// otherwise 'skip it'
//let websiteMessage: string = 'Fresh apples at |$3.49| per lb'
// Tasks for the student:
// 1. Find the first and last index of |
// 2. Extract the price using slice()
// 3. Remove the $ sign and convert the string to a number
// 4. Check if the price is <= 5
// 5. Print 'buy the item' if true
// 6. Print 'skip it' if false

let storeMessage : string ='Fresh apples at |$3.49| per lb';
let firstIndexOfThis : number = storeMessage.indexOf('|');
let lastIndexOfThis : number = storeMessage.lastIndexOf('|');
let mes1 : string = storeMessage.slice(firstIndexOfThis +2,lastIndexOfThis)
let mes2: number =parseFloat(mes1)
if(mes2<=5){
    console.log('buy the item')
}else{
    console.log('skip it')
}

