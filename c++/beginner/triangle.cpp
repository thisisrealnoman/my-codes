#include <iostream>
#include <conio.h>

using namespace std;

int main(){

    double base, height, areaOfTriangle;

    cout<< "Enter the base of the Triangle : ";
    cin>>base;

    cout<< "Enter the height of the Triangle : ";
    cin>>height;

    areaOfTriangle = 0.5 * base * height;

    cout<<"Area of the triangle is : "<< areaOfTriangle;

    getch();
}
