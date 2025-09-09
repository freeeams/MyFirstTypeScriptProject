

// // // class HomePage1 {
// // //     titleMessage: string = 'Less pain. Better Sleep'

// // //     clickingButton(): void {
// // //         console.log('Clicking on button')
// // //     }
// // // }

// // // class PurpleMattressPage {
// // //     titleMeassage: string = 'Sleep your pain away'
// // //     titleMessage2: string = 'Every Purple mattress uses our patented GelFlex Grid to reduce your aches and pains by 40%.¹'

// // //     clickingButton(): void {
// // //         console.log('Clicking on button')
// // //     }

// // //     scroll(): void {
// // //         console.log('scrolling the page')
// // //     }
// // // }



// // // }


// // // add another method for login
// // // it will take 2 arguments username and password
// // // it will return nothing
// // // if the username length is less then 3 print 'Bad username!'
// // // else 'Good username!'
// // // if the password length is less then 8 'Bad password!'
// // // else 'Good password!'

// // class WayFairHomePage {
// //     firstMeassage: string = 'Hi there'
// //     searchString(searchString: string): string[] {
// //         let searchResult: string[] = []
// //         if (searchString === 'Chair') {
// //             console.log('123' + searchString)
// //         } else if (searchString === 'couch') {
// //             console.log('1234' + searchString)
// //         }
// //         return searchResult
// //     }
// //     loginPage(username: string, password: string): void {
// //         if (username.length < 3) {
// //             console.log('Bad username!')
// //         } else {
// //             console.log('Good username!')
// //         }
// //         if (password.length < 8) {
// //             console.log('Bad password!')
// //         } else {
// //             console.log('Good password!')
// //         }
// //     }
// // }


// // // Create a class called CarsLoginTestPage
// // // Add three properties for validation:
// // // - yourNameHere : string = 'Sign In to Cars.com'
// // // - yourNameHere : string = 'Invalid username or password'
// // // - yourNameHere : string = 'Welcome to Cars.com!'

// // // 1. navigateToLoginPage(): void - prints 'Navigating to Cars.com login page...'
// // // 2. enterCredentials(username: string, password: string): void
// // //    - prints 'Entering username: ' + username
// // //    - prints 'Entering password: ' + password
// // // create a copy of the class and store it
// // // call methods and print the variables


// // class CarsLoginTestPage {
// //     signInMessage: string = 'Sign In to Cars.com';
// //     invalidMesage: string = 'Invalid username or password';
// //     welcomMessage: string = 'Welcome to Cars.com!';


// //     navigateToLoginPage(): void {
// //         console.log('Navigating to Cars.com login page...')
// //     }
// //     enterCredentials(username: string, password: string): void {
// //         console.log('Username: ' + username);
// //         console.log('Password: ' + password);

// // }

// // let CarsLoginTestPage = new CarsLoginTestPage()

// // CarsLoginTestPage.navigateToLoginPage()
// // }




// // Create a class for testing the Chick-fil-A mobile order login page
// // Add three properties for validation:
// // - The expected title text that should appear on the login screen
// // - The message shown when login fails
// // - The message shown when login succeeds
// // 1. A method to navigate to the Chick-fil-A login screen
// //    - It should print a message showing that the app is moving to the login page
// // 2. A method to input the username and password
// //    - It should print both the username and password being typed
// // create a copy of your class
// // and print class variables
// // and call the 2 methods
// class ChickFilALoginTestPage {
//     title: string = "Sign In to Chick-fil-A";
//     messageLoginFail: string = "Invalid username or password";
//     messageLoginSuccess: string = "Welcome to Chick-fil-A!";

//     navigateToLoginPage(): void {
//         console.log("Navigating to Chick-fil-A login page...");
//     }

//     enterCredentials(username: string, password: string): void {
//         console.log("Username: " + username);
//         console.log("Password: " + password);
//     }
// }


// let loginTest = new ChickFilALoginTestPage();

// console.log('Title:', loginTest.title);
// console.log('Fail Message:', loginTest.messageLoginFail);
// console.log('Success Message:', loginTest.messageLoginSuccess);

// loginTest.navigateToLoginPage();
// loginTest.enterCredentials('dima_user', 'securePassword123');


// // Create a class for YouTubeTestPage
// // This class will help us test YouTube's website functionality
// // Add 3 variables to store important testing data:
// // Variable 1: Store the expected page title that should appear when YouTube loads (as text)
// // Variable 2: Store the default video quality setting as a whole number (like 720 or 1080)
// // Variable 3: Store an error message that appears when something goes wrong (as text)
// // Add 3 methods that perform different YouTube testing actions:
// // Method 1: Navigate to YouTube homepage
// // This method takes no arguments (nothing gets passed into it)
// // This method doesn't give anything back when it finishes
// // When called, it should print a message saying 'it's going to YouTube'
// // Method 2: Search for videos by category
// // This method takes one argument: the search category as text (like "music" or "gaming")
// // This method gives back a list of video titles (multiple pieces of text)
// // If the category is "music" give back a list with 3 music video titles
// // If the category is "tutorial" give back a list with 3 tutorial video titles
// // If the category is anything else, give back an empty list
// // Method 3: Change video playback speed
// // This method takes two arguments: current speed as a decimal number, and desired speed as a decimal number
// // This method gives back either true or false
// // If the desired speed is between 0.25 and 2.0, give back true
// // If the desired speed is outside that range, give back false
// // After creating your class:
// // Create a copy of your class using the 'new' keyword
// // Print all 3 variables from your class copy
// // Call all 3 methods from your class copy
// // For methods that give something back, print what they return
// // For the method that doesn't give anything back, just call it

// class YouTubeTestPage {
//     titleMessageYouTubeLoad: string = 'YouTube';
//     videoQuality: number = 1080;
//     errorMeassage: string = 'something wrong';

//     navigateToHomepage(): void {
//         console.log("it's going to YouTube");

//     }

//     searchCategory(category: string): string[] {
//         if (category === 'music') {
//             return ['Eminem - Without Me', 'Das EFX - Baknaffek', 'Mobb Deep - Shook Ones'];
//         } else if (category === 'tutorial') {
//             return ['How to use something', 'Create the bomb', 'How it working'];
//         } else {
//             return []
//         }
//     }

//     changePlaybackSpeed(currentSpeed: number, QSpeed: number): boolean {
//         if (currentSpeed >= 0.25 && QSpeed <= 2.0) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// let youTubeTestPage = new YouTubeTestPage();



// console.log(youTubeTestPage.navigateToHomepage)
// console.log(youTubeTestPage.changePlaybackSpeed)




// class NetflixHomePage {
//     homepageTitle: string = 'Netflix - Watch TV Shows Online, Watch Movies Online';
//     videoQuality: number = 1080;
//     maximumProfiles: number = 5;
//     navigateToHomepage(): void {
//         console.log('its loading Netflix')
//         console.log('Loaded successfully')
//     }
//     calculateMonthlyWatched(dailyHours: number, daysInMonth: number): number {
//         let totalHours = (dailyHours * daysInMonth)
//         return totalHours
//     }


// }

// class LinkedInHomePage {
//     homePageTitle: string = 'LinkedIn - The Worlds Largest Professional Network';
//     maximumConnection: number = 25000;
//     minimumProgile: number = 75
//     navigateToProfessionalDashboard(): void {
//         console.log('Loading LinkedIn dashboard')
//         console.log('Professional network loaded successfully')
//     }
//     calculateNetworkingScore(totalConnection: number, viewsPerWeek): number {

//         let totalScore = ((totalConnection / 100) + (viewsPerWeek * 2))

//         return totalScore
//     }

//     filterJob(industry: string, experianceLevel: number): string[] {

//         let jobPosition: string[] = ["tech-Software Engineer-3", "finance-Investment Analyst-2", "tech-Product Manager-5", "healthcare-Nurse-1", "finance-Financial Advisor-4", "tech-Data Scientist-6", "marketing-Brand Manager-2", "tech-DevOps Engineer-4"]
//         let matchBothCreteria: string[] = [];
//         for (let i = 0; i < jobPosition.length; i++) {
//             let newJobPosition = jobPosition[i].split('-')
//             let industryPosition = newJobPosition[0]
//             let titleOfJob: string = newJobPosition[1]
//             let experience = parseFloat(newJobPosition[2])

//             if (industryPosition === industry && experianceLevel <= experience) {
//                 console.log(matchBothCreteria.push(titleOfJob))


//             }


//         }
//         return matchBothCreteria
//     }


// }


// let newLinkedInHomePage = new LinkedInHomePage();
// console.log(newLinkedInHomePage.filterJob('tech', 2))


// class BookingComHomePage {
//     homePageTitle: string = 'Booking.com - Official Site - The Best Hotels & Accommodations';
//     maximumReservation: number = 3;
//     qualityAssurance: number = 7.3;
//     navigateToHotelSearchDashboard(): void {
//         console.log('Its loading Booking.com hotel search dashboard')
//         console.log('Accommodation booking platform loaded successfully')
//     }
//     calculateTotalStayCostWithTaxes(roomRatePerNight: number, numberOfNights: number): number {
//         let totalCost = (roomRatePerNight * nights) + (roomRatePerNight * nights * 0.12) + 25
//         return totalCost
//     }
//     filterByStarRatingAndPriceRange(minimumStarRating: number, maximumPricePerNights: number): string[] {
//         let hotel: string[] = ["4-Grand Plaza Hotel-180",
//             "3-City Center Inn-120",
//             "5-Luxury Resort Spa-250",
//             "3-Budget Comfort Lodge-95",
//             "4-Business Executive Suite-160",
//             "5-Premium Ocean View-220",
//             "2-Economy Travel Motel-75",
//             "4-Historic Boutique Hotel-140"]
//         let matchBothCriteria: string[] = []
//         for (let i = 0; i < hotel.length; i++) {
//             let newHotelList = hotel[i].split('-')
//             let minimumStarRating1 = parseFloat(newHotelList[0])
//             let hotelName = newHotelList[1]
//             let maximumPricePerNights1 = parseFloat(newHotelList[2])
//             if (minimumStarRating1 <= minimumStarRating && maximumPricePerNights >= maximumPricePerNights1) {
//                 matchBothCriteria.push(hotelName)
//             }


//         }
//         return matchBothCriteria

//     }
//     propertiesByAmenities(requiredAmenity: string, cancellationFlexibility: string): string[] {
//         let listOfAmenitiesHotelsCanseletoins: string[] = ["wifi-Downtown Business Hotel-free",
//             "pool-Resort Paradise-partial",
//             "gym-Fitness Center Lodge-free",
//             "wifi-Tech Hub Hotel-strict",
//             "pool-Tropical Getaway-free",
//             "gym-Active Lifestyle Inn-partial",
//             "wifi-Digital Nomad Suite-free",
//             "pool-Family Fun Resort-strict"]
//         let filteredProperties: string[] = []
//         for (let i = 0; i < listOfAmenitiesHotelsCanseletoins.length; i++) {
//             let currentProperties = listOfAmenitiesHotelsCanseletoins[i].split('-')
//             if (requiredAmenity === currentProperties[0]) {
//                 console.log(filteredProperties.push(currentProperties[1]))
//                 if (cancellationFlexibility === 'strict') {
//                     filteredProperties.push(currentProperties[1])
//                 } else if (cancellationFlexibility === 'partial' && ['free', 'partial'].includes(currentProperties[2])) {
//                     filteredProperties.push(currentProperties[1])
//                 } else if (cancellationFlexibility === 'free' && currentProperties[2] === 'free') {
//                     filteredProperties.push(currentProperties[1])
//                 }
//             }
//         }
//         return filteredProperties
//     }
// }
// class AmazonSearchPage {

//     homepageTitle: string = 'Amazon - Online Shopping for Electronics, Apparel, Computers, Books'
//     maximumItems: number = 50;
//     minimumProduct: number = 4.3;
//     amazonSearchTesting(productNames: string, endingWord: string): string[] {
//         let productGaming: string[] = ['Gaming Laptop", "Wireless Mouse", "Bluetooth Headset']
//         let emptyProductGamig: string[] = []
//         for (let i = 0; i < productGaming.length; i++) {
//             let storeMatchingProduct = productGaming[i].split('')
//             console.log(storeMatchingProduct)
//             let lowerCaseProduct = storeMatchingProduct[i].toLowerCase()
//             let lowerCaseProduct1 = productGaming[productGaming.length - 1]
//             if (lowerCaseProduct === endingWord.toLowerCase()) {
//                 emptyProductGamig.push(productGaming[i])
//             }

//         }
//         return productGaming


//     }
// }

class InstagramProfilePage {
    homepageTitle: string = 'Instagram - Share Your Story';
    maximumPostsPerHour: number = 11;
    minimumFollower: number = 3.1;
    findHashTagsWithSpecificLengthRequirements(hashtagsArray: string[], minimumLength: number): string[] {
        let matchingProductArray: string[] = []
        for (let i = 0; i < hashtagsArray.length; i++)
            if (hashtagsArray[i].length >= minimumLength) {
                matchingProductArray.push(hashtagsArray[i].toUpperCase())


            }
        return matchingProductArray

    }
}
let NewInstagramProfilePage = new InstagramProfilePage()
console.log(NewInstagramProfilePage.findHashTagsWithSpecificLengthRequirements(["#art",
    "#photography",
    "#food",
    "#lifestyle",
    "#tech"], 6));


class TwitterFeedPage {
    expectedHomePageTitle: string = 'Twitter - Whats Happening';
    maximumTweets: number = 303;
    minimumRetweetRate: number = 1.8
    findUsernamesThatStartAndEndWithSpecificCharacters(userName: string[], startingCharacter: string, endingCharacter: string): string[] {
        let storeMatching: string[] = []
        for (let i = 0; i < userName.length; i++)
            if ((userName[i].charAt(0) === startingCharacter) && (userName[i].charAt(userName[i].length - 1) === endingCharacter)) {
                storeMatching.push(userName[i].replace('@', ''))
            }
        return storeMatching

    }
}
let NewTwitterFeedPage = new TwitterFeedPage()


console.log(NewTwitterFeedPage.findUsernamesThatStartAndEndWithSpecificCharacters(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e"))



class DimaBranch {
     expectedHomePageTitle: string = 'Hello there'
}













































// Create a class for LinkedInNetworkPage
// This class will help us test LinkedIn's professional networking platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "LinkedIn - Professional Networking Platform")
// Variable 2: Store the maximum connection requests per day as a whole number (like 100 or 200)
// Variable 3: Store the minimum profile completion percentage for visibility as a decimal number (like 85.5 or 92.3)
// Add 1 method that performs LinkedIn networking testing:
// Method 1: Find profiles with names starting with a specific letter
// This method takes two arguments: profile names array like ["Alice Johnson", "Bob Smith", "Charlie Brown"], and starting letter as text (like "A")
// This method gives back a list of matching profile names like ["Alice Johnson"]
// STEP 1: Create an empty array to store matching profiles
// STEP 2: Use a for loop to go through each profile name in the provided array
// STEP 3: Inside the loop, use the charAt(0) string method to get the first letter
// of the current profile name
// STEP 4: Use the toUpperCase() string method on this first letter
// STEP 5: Check if this first letter equals the starting letter parameter
// (also convert starting letter to uppercase)
// STEP 6: If they match, add the original profile name to your matching array
// STEP 7: After the loop, give back the array of matching profile names
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findProfilesWithStartingLetter(["Alice Johnson", "Bob Smith", "Charlie Brown", "Anna Davis", "Edward Norton"], "A") and print the result
// Expected output: ["Alice Johnson", "Anna Davis"]










































































































