#include<iostream>
using namespace std;

class Rectangle{

private:
    int length, width;

public:
    Rectangle(int parameterLength, int parameterWidth){

        length = parameterLength;
        width = parameterWidth;
    }

    friend int calculateArea(Rectangle obj);

};

int calculateArea(Rectangle obj)
{
    int area=obj.length*obj.width;
    return area;

}


int main(){

    Rectangle anotherObj(25,100);
    cout << "The area of rectangle is = " << calculateArea(anotherObj);

    return 0;

}

