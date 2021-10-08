
function likes(names) {
    var length = names.length;
   var res;
     switch(length) {
         case 0:
           res = 'no one likes this';
         break;
         case 1:
           res = names[0] + " " + 'likes this';
         break;
         case 2:
           res = names[0] + " " + 'and' + " " +names[1]  + " " + 'like this';
         break;
         case 3:
            res = names[0] + ',' +names[1] + " " + 'and' + " " +names[2] + " " + 'like this';
         break;
         case 4:
         res = names[0] + ',' + " " +names[1] + " " + 'and' + " " + ' 2 others like this';
         break;
         default:
         res = names[0] + ',' + " " +names[1] + " " + 'and' + " " +(length - 2) +' others like this';
     }
   return res;
 }
   
  console.log(likes(['Peter']));
  console.log(likes(['Peter','Mohan']));
  console.log(likes(['Max', 'John', 'Mark']));
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max','Ram']));

