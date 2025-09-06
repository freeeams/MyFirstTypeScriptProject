// // // for(let i=3; i<7; i++){
// // // console.log('Lucky'+ i)
// // // }


// // // for(let i=1; i<8; i++){
// // // console.log('Day number = '+ i)
// // // }



// // // for(let $=1; $<31; $++){
// // //     console.log('$'+ $)
// // // }




// // // for(let a = 0; a < cars.length; a++){
// // //     console.log(cars)
// // // }

// // // let daysA = ['1','2','3','4','5','6','7']
// // // for(let days=0; days<7;days++){
// // //     console.log(daysA[days])
// // // }

// // // let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // // for(let days=0; days<7; days++){
// // //     console.log(days1[days])
// // // }



// // let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // for (let i = 0; i < days1.length; i++) {
// //     if (days1[i] === 'Tuesday') {
// //         console.log(days1[i])
// //     }
// // }
// // console.log('it is not ')


// // // if my current vacation place is 'Ukraine'
// // // add it to my saved place
// // let vacationPlaces = ['Hawaii', 'Porte rico', 'Ukraine', 'Poland']
// // let mySavedPlaces: string[] = [];
// // while (true) {
// //     let currentPlaces = vacationPlaces.pop()
// //     if (currentPlaces === undefined) {
// //         break;
// //     }
// //     if (currentPlaces.includes('Ukraine')) {
// //         mySavedPlaces.push(currentPlaces)
// //     }

// // }

// // // We have a box of items (last item is on top)
// // // We'll keep unpacking until the box is empty
// // // if the item includes 'e' then print
// // // console.log("KEEPING: " + item);
// // // else
// // // console.log("DISCARDING: " + item);

// // let box: string[] = ['notebook', 'pen', 'eraser', 'marker', 'stapler'];
// // while (box.length > 0) {
// //     let currentBox = box.pop()
// //     if (currentBox?.includes('e')) {
// //         console.log("KEEPING: " + currentBox)
// //     } else {
// //         console.log("DISCARDING: " + currentBox)
// //     }
// // }




// // // We have a stack of clothes (last item is on top)
// // // We'll keep unpacking until the stack is empty
// // // If the item length is more than 4 then print
// // // console.log("FOLDING: " + item);
// // // else
// // // console.log("DONATING: " + item);

// // let clothes: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
// // let clothes2: string[] = [];
// // while (clothes.length > 0) {
// //     let currentClothes = clothes.pop()!
// //     if (currentClothes.length > 4) {
// //         clothes2.push(currentClothes)
// //     }
// // }

// // // Example 4: stationery
// // // Unpack until empty
// // // If item ends with 'r' → console.log("KEEPING: " + item)
// // // else → console.log("THROWING: " + item);


// // // Example 3: books
// // // Unpack until empty
// // // If item includes letter 'a' → console.log("READING: " + item)
// // // else → console.log("IGNORING: " + item);



// // let books: string[] = ['Math', 'History', 'Art', 'Science', 'Poetry'];
// // while (books.length > 0) {
// //     let currentBooks = books.pop()
// //     if (currentBooks?.includes('a')) {
// //         console.log(("READING: " + currentBooks))
// //     } else {

// //         console.log("IGNORING: " + currentBooks)
// //     }

// // }


// // // Unpack until empty
// // // If item starts with 'h' OR ends with 't' → console.log("CUDDLING: " + item)
// // // else → console.log("WATCHING: " + item);

// // let pets: string[] = ['cat', 'parrot', 'hamster', 'dog', 'turtle'];
// while (pets.length > 0) {
//     let currentPets = pets.pop()!
//     if (currentPets.startsWith('h') || currentPets.endsWith('t')) {
//         console.log("CUDDLING: " + currentPets)
//     } else {
//         console.log("WATCHING: " + currentPets)
//     }
// }


// // Example 1: snacks
// // fori loop
// // if the current snack is ending with 's' count it


// // let snacks: string[] = ['chips', 'cookie', 'nuts', 'candy', 'pretzel'];
// // let snacksNum: number = 0

// // for (let i = 0; i < 5; i++) {
// //     if (snacks[i].endsWith('s')) {
// //         snacksNum++
// //     }
// // }
// // console.log(snacksNum)



// // count the people who are sleepy
// // if the current person is 'Vova' || 'Dima' || "Tania"
// // count it
// // when the loop is finished
// // print '3 amazing people came even though they were tired!'
// let classroom = ['Vova', 'Dima', "Tania", 'Alina', 'Artem', 'Anna'];
// let classroomS: number = 0;
// for (let i = 0; i < classroom.length; i++) {
//     let currentS = classroom[i]
//     if (classroom[i].includes('Vova') || ('Dima') || ('Tania')) {
//         classroomS++
//         console.log('Tires people ' + classroomS)
//     }
// }

// // while (pets.length > 0) {
// //     let currentPets = pets.pop()!
// //     if (currentPets.startsWith('h')||currentPets.endsWith('t')) {
// //         console.log("CUDDLING: " + currentPets)
// //     } else {
// //         console.log("WATCHING: " + currentPets)
// //     }
// // }


// // while loop only
// // We are managing a guest list
// // We want to COUNT guests whose name starts with "S"
// // Task: Loop through guestList
// // If name starts with 'S', increase guestCount

// let guestList = ['Sam', 'John', 'Sophie', 'Mike', 'Steve', 'Emma']
// let guestCount = 0
// for (let i = 0; guestList > i; i++)

//     while (guestList.length > 0)
//         if (guestList[].startsWith('s')) {
//             guestCount.push()
//         }



// // while loop only
// // We are analyzing a list of words
// // We want to COUNT words that start with 'a' or 'A'
// // Task: Loop through words
// // If word starts with 'a' or 'A', increase aWordsCount

// let words = ['Apple', 'banana', 'Apricot', 'orange', 'avocado']
// let aWordsCount = 0
// for (let i = 0; i < words.length; i++) {
//     if (words[i].startsWith('a') || words[i].startsWith('A')) {
//         aWordsCount++
//     }
// }


// while and fori loop
// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"
// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount

let emails = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount = 0
for (let i = 0; i < emails.length; i++) {

    while (emails.length > 0) {
        let currentEmail = emails.pop()!
        if (emails[i].endsWith('gmail.com'))
            gmailCount++
    }

}
console.log(gmailCount)
























