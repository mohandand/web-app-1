/* unlike java if use a varibale which is not
 declread it doesnot through error but it will give output as undefind */

 console.log(a);
 var a = 10 ;
 console.log(a);

 /* but if we use let or const it wont allow us to use before intialization and it will through error. 
 because hoisting wont happen for let and const */

 // let keyword will have block level scop

 let weather = 'sunny';

 function changeWeather(){
     let weather = 'rainy';
     console.log('wether in function level : ' +weather );
 }
changeWeather();
console.log(weather);   

/* in above first it will print rainy as it block level but where as 
below statment print sunny as it declraed globally.
 but if use const it wont allow in inside function also */

 for(var n=0 ;n<5;n++)
 {
     console.log(n);
 }
 console.log(n);
  
/* in above we declared n in for loop but still we can able to access outside for loop and thic cant be done
in other programing languages to stop this we can use let so it wont print out side for loop */
var e = 10;
const f = 20 ;
console.log(a);

// object declaration

var obj = {
    name : "fizon",
    age : '25',
    sing: function(){
        console.log(`${this.name} sings`);
    }
};

obj.sing();
//even u can remove declare function inside directly as follows

var obj1 = {
    name1 : "Mohan",
    age1 : '25',
    singg(){
        console.log(`${this.name1} sings`);
    }
};
obj1.singg();

//declaring arrays we can have empty elements as well

var arr = [1,2,'mohan',45,,4];
console.log(arr[1]);
arr.push(46);
arr.push(47);
arr.pop();
console.log(arr);
//unshift will add element in first index and shift will remove element from first index

arr.unshift('added');
arr.unshift('added');
console.log(arr);
arr.shift();
console.log(arr);

//hosting in functions
/* it wont  through error because hoisting will  happend and it 
wil create memory for both function and its defeination          */
happy();

function happy()
{
    console.log('I am happy and calling this function before it declaration');

}
//scope of variables
/* in below a will give only 10 as functional block scope only their within function
and if access b outside function it will throug error as it declarred within function*/
var a = 10;

print();

console.log(a);

function print()
{
    var b=10;
    var a =20;
}
console.log(a);
//console.log(b);

//function Expression

/*normal functions get it defeination at complie time but this function expressions gets its defeination 
at run time  and if u call with exam name it will through an error as function not declared*/

var hello = function exam()
{
    console.log('hello all');
    
}

console.log(hello());
//Immediatley Invoked Function Expressions

/*this functions will be called immediatly no need to call them externally */

(function hai(text)
{
    console.log(text);
}
)('hell all');