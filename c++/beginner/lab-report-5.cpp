#include <iostream>

using namespace std;

class partTimeJob {

protected:

    double salaryPerDay;

    int days;

public:

    void setSalaryPerDay(double salary) {

        salaryPerDay = salary;

    }

    void setDays(int numDays) {

        days = numDays;

    }

    friend class totalSalary;

};

class fullTimeJob {

protected:

    double fullTimeSalary;

public:

    void setFullTimeSalary(double salary) {

        fullTimeSalary = salary;

    }

    friend class totalSalary;

};

class totalSalary {

private:

    double total;

public:

    void calculateTotal(partTimeJob partTimeJobObj, fullTimeJob fullTimeJobObj) {

        total = partTimeJobObj.salaryPerDay * partTimeJobObj.days + fullTimeJobObj.fullTimeSalary;

    }

    friend void printTax(totalSalary totalSalObj);

};

void printTax(totalSalary totalSalObj) {

    if (totalSalObj.total >= 50000) {

        double tax = 0.1 * totalSalObj.total;

        cout << "Tax: " << tax << endl;

    }

    else {

        cout << "Tax Salary is : " << totalSalObj.total << "Taka BDT" <<endl;

    }

}

int main() {

    partTimeJob partTimeJobObj;

    partTimeJobObj.setSalaryPerDay(25.0);

    partTimeJobObj.setDays(20);

    fullTimeJob fullTimeJobObj;

    fullTimeJobObj.setFullTimeSalary(25000.0);

    totalSalary totalSalObj;

    totalSalObj.calculateTotal(partTimeJobObj, fullTimeJobObj);

    printTax(totalSalObj);

    return 0;

}
