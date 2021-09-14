var res = document.getElementById('headerOne');
res.innerHTML = 'text changed Dynamically with javascript';
console.log(res);
var age = prompt('Enter you'r age....?');
document.getElementById('headerTwo').innerHTML  = age;
// <script src='practice.js'>
function between(a, b) {
            var ar1=[];
            var i =a ;
           for(var i; i<=b ;i++)
             ar1.push(i);
             return ar1;
        }
        console.log(between(3,8));
	   console.log(between(5,10));
console.log(between(5,20));
</script>