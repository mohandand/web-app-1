/* In JS we will implement Enacpsulation using keyword called class which will wrap data and
functions together */

/* class is nothing but a blueprint but not an pyhsical entity for ex buliding plan on paper and object is nothing but a physical 
entity of a class or instance of a class . New keyword used to create object and when create object it will 
call the constructor of class */

class Box{
    constructor(length)
    {
        this.length = length;
    }
    display()
    {
        console.log(this);
    }
}

let obj1 = new Box(12);
obj1.display();
