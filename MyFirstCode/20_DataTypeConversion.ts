// let myNumber : number = 17;
// let myNumberString : string = myNumber.toString()
// console.log(myNumber)


// let myNumber2 : number = 101;
// let myNumberString2 : string = '' + myNumber2
// console.log(myNumber2 )


// let myNumber3 : number = 404;
// let myNumberString3: string = String(myNumber3)
// console.log(myNumber3 )



let stringNumber: string = '499';
// method 1
let numberVersion: number = Number(stringNumber)
let numberVersion2: number = parseFloat(stringNumber)
let numberVersion3: number = parseFloat(stringNumber)


let myNum: number = 111;
let numVersion: number = Number(myNum)

let myNum2: string = '499.99'
let myNumVersion2: number = parseFloat(myNum2)



let purpleMattress: string = '499.99'
let purplePillow: string = '59.99'
let webAppTotal: string = '559.98'

let theNumberPurpleMattress: number = parseFloat(purpleMattress)
let theNumberPurplePillow: number = parseFloat(purplePillow)
let theNumberwebAppTotal: number = parseFloat(webAppTotal)
if ((theNumberPurplePillow + theNumberPurpleMattress) === theNumberwebAppTotal) {
    console.log('Total calculation is RIGHT.')
} else {
    console.log('Total calculation FAILED')
}

let purpleMattress1: string = '499.99'
let purplePillow1: string = '59.99'
let webAppTotal1: string = '559.98'

let theNumberPurpleMattress1: number = parseFloat(purpleMattress1)
let theNumberPurplePillow1: number = parseFloat(purplePillow1)
let theNumberwebAppTotal1: number = parseFloat(webAppTotal1)

if ((theNumberPurplePillow1 + theNumberPurpleMattress1) === theNumberwebAppTotal1) {
    console.log("Total calculation is RIGHT")
} else {
    console.log('Total calculation FAILED')
}




let netflixCost: string = '13.99'
let disneyCost: string = '17.99'
let youtubePremium: string = '22.99'

let netflixCost1: number = parseFloat(netflixCost)
let disneyCost1: number = parseFloat(disneyCost)
let youtubePremium1: number = parseFloat(youtubePremium)
if (netflixCost1 > 15) {
    console.log('We are canceling you.')
} else {
    console.log('dont')
}

if (disneyCost1 > 15) {
    console.log('We are canceling you.')
} else {
    console.log('dont')
}



let logEntry: string = '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout';
let error1 = logEntry.indexOf('[ERROR]');
let lastError = logEntry.lastIndexOf('[ERROR]');
let firstInfo = logEntry.indexOf('[INFO]');
console.log("Position of first [ERROR]:", error1);
console.log("Position of last [ERROR]:", lastError);
console.log("Position of first [INFO]:", firstInfo);


