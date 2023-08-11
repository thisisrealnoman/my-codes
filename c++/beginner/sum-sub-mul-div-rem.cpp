#include <iostream>
#include <conio.h>

using namespace std;

int main(){

    int num1, num2;

    num1 = 10;
    num2 = 5;

    //summation
    int sum = num1 + num2;
    cout << "Summation is : "<< sum;
    cout << endl;


    //Subtraction
    int sub = num1 - num2;
    cout << "Subtraction is : "<< sub;
    cout << endl;


    //Multiplication
    int mul = num1 * num2;
    cout << "Multiplication is : "<< mul;
    cout << endl;


    //Division
    double div = (float) num1 / num2;
    cout << "Division is : "<< div;
    cout << endl;

    //Remainder
    int rem = num1 % num2;
    cout << "Remainder is : "<< rem;
    cout<< endl;


    getch();
}
