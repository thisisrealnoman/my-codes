const lyrics = "I am feeling lonely. Oh, I wish I would find a lover that could hold me. Now I am crying in my room"
const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const chars = lyrics.split("");
console.log(chars);

// to cut a piece 
const partial = lyrics.slice(0, 12);
// console.log(partial);

// substring

const partial2 = lyrics.substring(0, 12);
// console.log(partial2);

// join
const lines = [
    'I am feeling lonely',
    'Oh, I wish I would find a lover that could hold me',
    'Now I am crying in my room'
  ];

const newSongLyrics = lines.join(",,,,,,,,");
// console.log(newSongLyrics);