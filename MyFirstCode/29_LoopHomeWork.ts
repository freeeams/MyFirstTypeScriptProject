// let items = 'apple,chips,carrot,ice cream'
// let healteItems = ['apple', 'carrot', 'spinach']
// let healthyFound = []

// let itemsArray = items.split(',')
// for (let i = 0; i < itemsArray.length; i++) {
//     if (healteItems.includes(itemsArray[i])) {
//         healthyFound.push(itemsArray[i])
//     }
// }




// let currentStudents = ['Vova', 'Dima', 'Anna', 'Tania', 'Art', 'Katya', 'Arty']
// let theOnlineStudents = ['Anna', 'Art', 'Katya', 'Arty', 'Alina']
// let currentOnlineStudents = []
// for (let i = 0; i < currentStudents.length; i++) {
//     if (theOnlineStudents.includes(currentStudents[i])) {
//         currentOnlineStudents.push(currentStudents[i])
//     }
// }
// while (currentOnlineStudents.length > 0) {

// }



// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks
// if it is a reliable truck then we are saving
let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']
let savedTrucks: string[] = []

for (let i = 0; i < truckInventory.length; i++) {
    if (truckInventory.includes(reliableTruck[i])) {
        savedTrucks.push(reliableTruck[i])
    }
}
console.log(savedTrucks)
while (truckInventory.length > 0) {
    let currentTruck = truckInventory.pop()!
    if (reliableTruck.includes(currentTruck)) {
        savedTrucks.push(currentTruck)
    }
}

// Your mission:
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"

// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?
let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons = ['sword', 'bow'];
let defenseItems = ['shield', 'armor'];
for (let i = 0; i <gameItems.length; i++){
    if(weapons.includes(gameItems[i]))
   console.log('WEAPON:'+ gameItems[i])!
else if(defenseItems.includes(gameItems[i])){
    console.log('DEFENSE:'+gameItems[i])
}else{
    console.log('Other:')
}
}




