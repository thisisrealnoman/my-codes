#include <iostream>
#include <conio.h>

using namespace std;

int main(){

    int number;

    double doubleNumber;

    char myCharacter;

    char myString[20];


    //integer number input
    cout << "Enter an integer number: ";

    cin>> number;

    cout<< "Entered number is : "<< number << endl << endl;


    //double number input
    cout << "Enter a double number: ";

    cin >> doubleNumber;

    cout << "Entered double number is : "<< doubleNumber<< endl << endl;


    //character input

    cout << "Enter a character: ";

    cin >> myCharacter;

    cout << "Entered character is : "<< myCharacter<< endl <<endl;


    //string input

    cout << "Enter your name: ";

    cin >> myString;

    cout << "Hello, "<< myString;

    getch();
}
