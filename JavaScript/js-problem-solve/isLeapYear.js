function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2024;
const leapYearResult = isLeapYear(myYear);
console.log(myYear, "is a leap year", leapYearResult);

//shortcut
/* function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    
    return false;
} */