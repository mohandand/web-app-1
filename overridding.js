aclass Parent
{
    live(){
        console.log('He lives in India');
    }
}

class Child extends Parent

{   
    live()
    {
        console.log('He lives in india');
    }
}

var obj = new Child();
obj.live();

// we get output as overridding

