/* Unlike java if  we use a varibale which is not
 declread it doesnot through an error but it will give output as undefind */

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

//Function Methods call,apply bind

/* below methods are used to borrow methods from another object*/

let animal = {
    name2 :'Mohan',
    eat(a,b){console.log(this.name2  + 'eating' +a  +b);}
};

let human ={
    name2 : 'Ravi'
};

animal.eat(5,'apples');

//borrowing human object using call method

animal.eat.call(human,6,'mangoes');

animal.eat.apply(human,[10,'mangoes']);

let humanBind = animal.eat.bind(human);

humanBind(10,'Oranges');

//This Keword need to check this concept but basically this will refer to current object that is calling it

//ARROW Function Important

/* without using Arrow*/

let ob = {
    name : 'Mohan',
    prnt : function() {
            console.log('a:' ,this);
            var an_prnt = function(){
                console.log('b:',this);
            }
            an_prnt();
    }
}
ob.prnt();
/* In above an_prnt function printing window object instead of ob object so to avoid this we will use
 arrow function */
 let ob1 = {
    name : 'Mohan',
    prnt : function() {
            console.log('a:' ,this);
            var an_prnt = ()=>{
                console.log('b:',this);
            }
            an_prnt();
    }
}
ob1.prnt();

//now above code print will ob1 object only.we can also use bind but its lengthy procedure.

//Higher Order Functions

/* a function that will take another function as argument or return function as on argument for example
 below setInterval function
will take fun1 function and it will repeataldy execute same function for given interval of time
below 1000milliseconds = 1 second* and to stop that we have to use clearInterval function*/

function fun1()
{
    console.log('hai');
}
//setInterval(fun1,1000);
//clearInterval(10);

//return function as on argument

function canVote(age)
{
    return age>=18;
}
function canDrive(age)
{
    return age>=16;
}
function canMarry(age)
{
    return age>=21;
}
console.log(canDrive(21));
console.log(canMarry(22));
console.log(canVote(16));

// above code is not for return function as on argument but if we implent same below

//then it will reduce code and perfome same functionality.

function age_req(r_age)
{
     return function(age)
     {
        return age>=r_age;
     };

};

let can_vote = age_req(18);

console.log(can_vote(34));
let can_drive = age_req(16);

console.log(can_drive(34));

//even we can write below as well
console.log(age_req(18)(24));

/* So this JS programing allow us a function we can use just like a variable then we call it is 
first class function. Here we are using a function as an arg of function and we are returning function 
inside a function..etc*/