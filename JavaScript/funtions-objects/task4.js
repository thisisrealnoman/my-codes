// has return has perameter
function even_odd(num){
    if(num % 2 == 0){
        return 'even';
    }
    else
        return 'odd';
}

// var myNum = 11;
// var result = even_odd(myNum);
// console.log(result);

// no return has perameter 
function even_odd(myNum){
    if(myNum % 2 == 0){
        console.log(myNum, "is even");
    }
    else{
        console.log(myNum, "is odd");
    }
}

myNum = 100;
even_odd(myNum);