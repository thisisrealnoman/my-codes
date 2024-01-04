#include<iostream>
using namespace std;

class Employee{

private:

    int salary = 50000;

friend class HRDepartment;

};


class HRDepartment{

public:

    void display(Employee ob){

    cout<< "Your salary is "<<ob.salary << " Taka";

    }

};

int main(){

    Employee spy;
    HRDepartment agent;
    agent.display(spy);

return 0;
}
