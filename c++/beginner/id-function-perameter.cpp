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

    void setValue(int class_id, double cgpa){
        id = class_id;
        gpa = cgpa;
    }

};

int main(){

    //first student

    Student Alex;
    Alex.setValue(10, 2.99);
    cout<<"Name: Alex" << endl;
    Alex.Print();

    // second student

    Student Mario;
    Mario.setValue(11, 2.33);
    cout<< "Name: Mario"<< endl;
    Mario.Print();

    // third student

    Student Franklyn;
    Franklyn.setValue(12, 2.63);
    cout<< "Name: Franklyn"<< endl;
    Franklyn.Print();

    getch();
}
