class LinkedInNetworkingTesting {


    findProfilesWithStartingLetter(profileNames: string[], startingLetter: string): string[] {

        let matchingProfiles: string[] = [];
        for (let i = 0; i < profileNames.length; i++) {
            let firstLetter = profileNames[i].charAt(0);
            firstLetter = firstLetter.toUpperCase();
            if (firstLetter === startingLetter.toUpperCase()) {

                matchingProfiles.push(profileNames[i]);
            }
        }
        return matchingProfiles;
    }
}
gjgjdkljdlf

let LinkedInPage = new LinkedInNetworkingTesting();


console.log(LinkedInPage.findProfilesWithStartingLetter(["Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Anna Davis",
    "Edward Norton"], 'A'));






































    



