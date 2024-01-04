#include<iostream>
using namespace std;

class Car{

    public:

double speed;


friend class Driver;

};

class Driver{

public:
    void setSpeed(Car mph){
    cout << "Enter car speed: ";
    cin>>mph.speed;
    cout<<"The speed of HONDA Civic is :"<<mph.speed<<endl;
    }

};

int main()
{
    Car mph;
    Driver noms;
    noms.setSpeed(mph);

 return 0;
}
