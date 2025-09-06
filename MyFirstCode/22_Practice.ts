// // // // 1. Extract battery percentage (between [ and %)
// // // // 2. Convert to number
// // // // 3. Check conditions:
// // // //    - If battery >= 90 → "Battery is healthy"
// // // //    - If battery >= 70 → "Battery is okay"
// // // //    - Otherwise → "Battery needs attention"


// let batteryInfo: string = 'Battery :[87%] Status : Charging';
// let firstIndexOfB: number = batteryInfo.indexOf('[');
// let secondIndexOf: number = batteryInfo.lastIndexOf(']');
// let veriable1: string = batteryInfo.slice(firstIndexOfB + 1, secondIndexOf);
// let veriable2: number = parseFloat(veriable1)
// if (veriable2 >= 90) {
//     console.log('Battery is healthy')
// } else if (veriable2 >= 70) {
//     console.log('Battery is okay')
// } else {
//     console.log('Battery needs attention')
// }



// // // //let shippingBox: string = 'Weight: [12.5kg] includes fragile items';
// // // // 1. Extract the weight (between [ and kg)
// // // // 2. Convert to decimal number
// // // // 3. If includes "fragile" AND weight <= 15 → "Handle with care"
// // // // 4. If weight > 20 → "Heavy load, additional charges apply"
// // // // 5. Otherwise → "Standard shipping"

// let shippingBox: string = 'Weight: [12.5kg] includes fragile items';
// let fisrtIndexOfKG: number = shippingBox.indexOf('[');
// let secondIndexOfKG: number = shippingBox.lastIndexOf(']');
// let veriable11: string = shippingBox.slice(fisrtIndexOfKG + 1, secondIndexOfKG - 2);
// let veriable22: number = parseFloat(veriable11);
// if (shippingBox.includes('fragile') && (veriable22 <= 15)) {
//     console.log('Handle with care')
// } if (veriable22 > 20) {
//     console.log('Heavy load, additional charges apply')
// } else {
//     console.log('Standard shipping')
// }

// // // 1. Extract the amount (between [$ and ])
// // // 2. Remove comma using replace()
// // // 3. Convert to number
// // // 4. If amount >= 1000 AND amount <= 5000 → "High Value Transaction"
// // //    Else if amount < 1000 → "Standard Transaction"
// // //    Else → "Check Transaction"











// // Your tasks:
// // 1. Find the position of the first '-' character
// // 2. Find the position of the last '-' character
// // 3. Extract the category (between first and second '-')
// // 4. Extract the size (after the last '-')
// // 5. Print the extracted information

// let productCode: string = 'PROD-ELEC-2024-SMART-XL';
// let veriable333: number = productCode.indexOf('-');
// let veriable444: number = productCode.lastIndexOf('-');
// let veriable555: string = productCode.slice(veriable333, veriable444);
// let veriable667: number = veriable555.length
// console.log(veriable555, veriable667)



// // 1. Extract the role name (between [ and ])
// // 2. If startsWith "Senior" AND includes "Automation" → "High-level Automation Role"
// //    Else if includes "QA" → "QA Role"
// //    Else → "Other Role"






let jobDescription: string = 'Role: [Senior QA Automation Engineer] Location: Remote';
let firstwork: number = jobDescription.indexOf('[' + 1);
let secondwork: number = jobDescription.lastIndexOf(']');
let qwerty: string = jobDescription.slice(firstwork, secondwork);
if (qwerty.startsWith('Senior') && (qwerty.includes('Automation'))) {
    console.log('High-level Automation Role')
} else if (qwerty.includes('QA')) {
    console.log('QA Role')
} else {
    console.log('Other Role')
}







// 1. Extract percentage (between [ and %)
// 2. Convert to number
// 3. If usage >= 90 →
//       if includes "backups" → "Critical: Backups consuming space"
//       else → "Critical: Free up space"
//    Else if usage >= 75 → "Warning: High usage"
//    Else → "Normal usage"









// 1. Extract label (between [ and ])
// 2. Use trim() to clean spaces
// 3. Use replace to normalize spacing
// 4. If startsWith "Express" →
// if includes "Fragile" → "Express Fragile Shipping"
// else → "Express Shipping"
// Else →
// if includes "insurance" → "Standard Shipping with Insurance"
// else → "Standard Shipping"


let labelData: string = 'Label: [ Express - Fragile ] includes insurance';
let veriable22: number = labelData.indexOf('[');
let veriable33: number = labelData.lastIndexOf(']');
let veriable44: string = labelData.slice(veriable22 + 1, veriable33);
let veriable55: string = veriable44.trim();
let veriable66: string = veriable55.replace('-', '');
if (veriable66.startsWith('Express'))
    if (veriable66.includes('Fragile')) {
        console.log('Express Fragile Shipping')
    } else {
        console.log('Express Shipping')
    } else if (veriable66.includes('Standard Shipping with Insurance')) {

    } else {
    console.log('"Standard Shipping"')
}





// 1. Extract comment (between [ and ])
// 2. Use trim() to remove extra spaces
// 3. If comment includes "!!!" →
//       if comment includes "praise" → "Excited Praise"
//       else → "Excited Comment"
//    Else if comment includes "good" →
//       if comment includes "work" → "Positive Work Comment"
//       else → "Positive Comment"
//    Else → "Neutral Comment"

// let commentData: string = 'Comment: [   Amazing work!!!   ] includes praise';
// let newData: number = commentData.indexOf('[');
// let newData2: number = commentData.lastIndexOf(']');
// let newData3: string = commentData.slice(newData + 1, newData2);
// let newData4: string = newData3.trim()
// if (newData4.includes('!!!')) {
//     if (commentData.includes('praise')) {
//         console.log('Excited Praise')
//     } else {
//         console.log('Excited Comment')
//     }
// } else if (commentData.includes('good')) {

//     if (newData4.includes('work')) {
//     }else {
//             console.log('Positive Comment')

//         }
//     }








