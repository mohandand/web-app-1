  var str = "How can mirrors be real if our eyes aren't real";
  const words = str.split(" ");
  console.log(words);
  var case1 = words.map((i) => i.charAt(0).toUpperCase() + i.slice(1));
  var str1 = case1[0];
  for(var j=1;j<case1.length-1;j++)
  {
    
   str1 = str1 + " " +case1[j];

  }
  console.log(str1);; 
//   function titleCase(stri)
//   {
//   for(var i=0 ;i<str.length;i++)
//   {
//       var case1 = stri[i].charAt(0).toUpperCase();
//       var ar1=[];
//       ar1.push(case1);
//   }
//   return ar1;
// }