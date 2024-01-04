function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
}

add(15, 20, 23, 45, 676);