// good variable
var price = 23;

// keywords are case sensitive
Var price = 23;
vAR price = 23;
VAR price = 23;


// 1. variable name can not be any keywords
var false = 87;
var return = true;


// 2. variable name has to be in one word(no space between two words)
var my home address = "new california";


// 3. variable name can not have quotation
var "name" = "tom and jerry";


// 4. variable name can not starts with a number but ** CAN ENDS WITH A NUMBERS **
var 99Club = 1964;
var club66 = 1694; // it is a valid variable


// 5. how to use long name 

//  cant use dash
var user-name = "kingKong";

// we can use underscore
var user_name = "chingChong"; 

var userhomeaddress = "New California"; // valid but **NOT GOOD**
var user_home_address = "New California"; // valid but widely use in python **NOT IN JS** (snake case)
var userHomeAddress = "New California"; // valid and good (camelCAse)
var UserHomeAddress = "New California"; // pascal case


//variable name is case sensitive
// here, two different variable
var value = 27;
var Value = 45;


//TO SUM UP
// variable should be in **one word** and it cant be a KEYWORD
// if there are multiple words we will use **camelCase**