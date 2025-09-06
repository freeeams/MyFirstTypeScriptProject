
// 1. Extract file size (between second [ and ])
// 2. Use replace() to remove "MB" and convert to Number
// 3. If size > 1.0 →
//       if size > 5.0 → "Large File with Backup"
//       else → "Medium File with Backup"
//    Else if size > 0.5 →
//       if fileData includes "backup" → "Small File with Backup"
//       else → "Small File"
//    Else → "Tiny File"




let fileData: string = 'File: [document.pdf] size: [2.5MB] includes backup';
let newFileData: number = fileData.lastIndexOf(':');
let newFileData2: number = fileData.lastIndexOf(']');
let newFileData3: string = fileData.slice(newFileData + 3, newFileData2);
let newFileData4: string = newFileData3.replace('MB', '')
let newFileData5: number = parseFloat(newFileData4);
console.log(newFileData5)
if (newFileData5 > 1.0) {
    if (newFileData5 > 5) {
        console.log('Large File with Backup')
    } else {
        console.log('Medium File with Backup')
    }
} else if (newFileData5 > 0.5) {
    if (fileData.includes('backup')) {
        console.log('Small File with Backup')
    } else {
        console.log('Tiny File')
    }
} else {
    console.log('ddddd')
}






// 1. Extract file size (between second [ and ])
// 2. Use replace() to remove "MB" and convert to Number
// 3. If size > 1.0 →
//       if size > 5.0 → "Large File with Backup"
//       else → "Medium File with Backup"
//    Else if size > 0.5 →
//       if fileData includes "backup" → "Small File with Backup"
//       else → "Small File"
//    Else → "Tiny File"

// 1. Extract rating (between first [ and ])
// 2. Extract review count (between second [ and ]) and convert both to parseFloat
// 3. If rating > 4.5 →
//       if reviews > 100 → "Excellent High-Volume Rating"
//       else → "Excellent Rating"
//    Else if rating > 4.0 →
//       if ratingData includes "verified" → "Good Verified Rating"
//       else → "Good Rating"
//    Else → "Average Rating"


let ratingData: string = 'Rating: [4.8] reviews: [127] includes verified';
let extractRatingData : string = ratingData.slice(ratingData.indexOf('[')+1,ratingData.indexOf(']'))
let extractRatingData2 : string = ratingData.slice(ratingData.lastIndexOf('[')+1,ratingData.lastIndexOf(']'));
let ratingDataSlice : number = parseFloat(extractRatingData);
let rewievData : number = parseFloat(extractRatingData2);
if(ratingDataSlice>4.5){
    if(rewievData>100){
    console.log('Excellent High-Volume Rating')
    }else{
    console.log('Excellent Rating')
    }
}else if(ratingDataSlice>4.0){
    if(ratingData.includes('verified')){
     console.log('Good Verified Rating' )
    }else{
    console.log('Good Rating')
    }
}else{
    console.log('Average Rating')
}
