#include<iostream>
using namespace std;

class Bank{
private:
    int totalBalance = 500000;
public:
    friend class Customer;
};
class Customer
{
private:

    int balance=700000;
public:

    void withdrawMoney(Bank &ob, int amount)
    {
        if(amount<balance)
        {
            balance-=amount;
            ob.totalBalance-=amount;
        }
    }
    void show_balance(Bank &ob)
    {
        cout<<"Bank Balance: "<<ob.totalBalance<<endl;
        cout<<"Customer Balance: "<<balance<<endl;
    }
};
int main()
{
    Bank ob;
    Customer ob2;
    ob2.withdrawMoney(ob,15000);
    ob2.show_balance(ob);

    return 0;
}
