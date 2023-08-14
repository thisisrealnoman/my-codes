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

    Student(int class_id, double cgpa){

        id = class_id;
        gpa = cgpa;
    }

};

int main(){

    //first student

    Student Alex(50, 3.31);
    cout<<"Name: Alex" << endl;
    Alex.Print();

    // second student

    Student Mario(51, 2.77);
    cout<< "Name: Mario"<< endl;
    Mario.Print();

    // third student

    Student Franklyn(52, 2.63);
    cout<< "Name: Franklyn"<< endl;
    Franklyn.Print();

    getch();
}
