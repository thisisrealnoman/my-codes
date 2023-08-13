#include <iostream>
#include <conio.h>

using namespace std;

class Student{

public:
    int id;
    double gpa;

};

int main(){

    Student Alex;

    Alex.id = 77;
    Alex.gpa = 3.99;

    cout<<"Name: Alex"<< endl << "ID: "<< Alex.id << endl << "GPA: "<< Alex.gpa << endl;

    Student Mario;

    Mario.id = 78;
    Mario.gpa = 3.89;

    cout<< "Name: Mario"<< endl << "ID: "<< Mario.id <<endl << "GPA: "<< Mario.gpa << endl;

    getch();
}
