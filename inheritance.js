//Inheritance

/* class is used to implement inheritance and each class can have only one constructor.

Extend keyword is used to inherit methods of parent calss to child calss.and To inherit constructor class method alone we will use super keyword */

class Box{
constructor(length){
    this.lenghth = length;
}
display(){
    console.log(this);
}
}

class SmallBox extends Box{
    constructor(length,breadth){
        super(length);
        this.breadth=breadth;
    }
    display(){
        console.log(this);
    }
}

let ob1 = new SmallBox(10,21);
ob1.display();