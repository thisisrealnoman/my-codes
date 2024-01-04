var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

if (myScore >= 80 && myScore <= 100) {
    console.log("Grade A");
}
else if (myScore >= 60 && myScore < 80) {
    console.log("Grade B");
}

else if (myScore >= 50 && myScore < 60) {
    console.log("Grade C");
}

else if (myScore >= 40 && myScore < 50) {
    console.log("Grade C");
}

else if (myScore <= 39 && myScore >= 0) {
    console.log("Fail");
}

else {
    console.log("Invalid Marks");
}