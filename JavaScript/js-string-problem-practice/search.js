const lyrics = "I am feeling lonely. Oh, I wish I would find a lover that could hold me. Now I am crying in my room."

const searchString = 'LonEly';
// const doesExits = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExits = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExits);

const doesExitsOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExitsOneLine);

//--------------------------------------------------------------------------------

// indexOf
console.log(lyrics.indexOf("lonely"));
// console.log(lyrics.indexOf("I"));

if(lyrics.indexOf("hahaha") !== -1){
    console.log("Exist inside the string!");
}
else{
    console.log("can not find it :(");
}


// startsWith
console.log(lyrics.startsWith("I"));

// endsWith
const fileName = 'important.txt';
const otherFile = 'myPic.png'
console.log(fileName.endsWith(".pdf"));
