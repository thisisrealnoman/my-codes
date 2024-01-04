#include<iostream>
using namespace std;

class Rectangle {

private:
    int length, width;

public:

    Rectangle(int x, int y) {
        length = x;
        width = y;
    }

    friend int calculateArea(Rectangle accessCalculateArea);
    friend int calculatePerimeter(Rectangle accessCalPerimeter);
};


int calculateArea(Rectangle accessCalculateArea) {
    int area = accessCalculateArea.length * accessCalculateArea.width;
    return area;
}


int calculatePerimeter(Rectangle accessCalPerimeter) {
    int perimeter = 2 * (accessCalPerimeter.length + accessCalPerimeter.width);
    return perimeter;
}


int main() {

    Rectangle access(5, 10);

    cout << "The area of the rectangle is " << calculateArea(access) << endl;

    cout << "The perimeter of the rectangle is " << calculatePerimeter(access);

    return 0;
}
