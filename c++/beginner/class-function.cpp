#include <iostream>
#include <conio.h>

using namespace std;

class Student{

public:
    int id;
    double gpa;

    void Print(){

    cout << "ID: "<< id << endl << "GPA: "<< gpa << endl << endl;

    }

};

int main(){

    //first student

    Student Alex;

    Alex.id = 77;
    Alex.gpa = 3.99;

    cout<<"Name: Alex" << endl;
    Alex.Print();

    // second student

    Student Mario;

    Mario.id = 78;
    Mario.gpa = 3.89;

    cout<< "Name: Mario"<< endl;
    Mario.Print();

    getch();
}
