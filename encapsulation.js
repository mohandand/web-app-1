/* In JS we will implement Enacpsulation using keyword called class which will wrap data and functions together */

/* class is nothing but a blueprint but not an pyhsical entity for example: buliding plan on paper and object is nothing but a physical entity of a class or instance of a class . New keyword is used to create object and when we create object it will automatically call the constructor of class  */

class Box{
    constructor(length)
    {
        this.length = length;
        console.log('constructor called');
    }
    display()
    {
        console.log(this);
    }
}

let obj1 = new Box(12);
//obj1.display();
