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

 
