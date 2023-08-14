function isLeapYear(year){
    
    const leapYear = year % 4;

    if(leapYear === 0){
        return true;
    }

    return false;

}

const isMyYearLeapYear = isLeapYear(2022);
console.log('my year leap-year', isMyYearLeapYear);

const isYourYearLeapYear = isLeapYear(1960);
console.log('your year leap-year', isYourYearLeapYear);