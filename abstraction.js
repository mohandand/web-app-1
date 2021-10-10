//Abstraction concept

/* its nothing but hiddeing unneccary details to end user

For example if we create array and if u put arraname and dot then we will get lots of array methods but
 we dont know where its defeination is. And genreally in java we use interface to implemmnt this concept 
 here we dont have interface so we use prototype. */

//

var father = {
    name:'Father',
    sing(){
        console.log('sing');
    },
    eat: ()=>{
        console.log('he can eat');
    
    }
}

var child = {
    name:'Father',
    sing(){
        console.log('sing');
    },
    bat: ()=>{
        console.log('he can bat');
    
    }
}
child.__proto__ = father;

for(let p in child)
{
    console.log(p + "" +child.hasOwnProperty(p));
}