function strCount(str, letter){  
    var counter = 0;
     for(var i = 0 ; i<str.length ;i++)
       {
         if(str[i]==letter)
           {
             counter++;
           }
       }
       return counter;
}

console.log(strCount('Hello' , 'l'));
console.log(strCount('banana' , 'a'));
console.log(strCount('dyper' , 'a'));