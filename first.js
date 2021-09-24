console.log('Connected');

// var button = document.querySelector('button');
// button.addEventListener('click',function(btn)
// {
//     console.log('Button was clicked');
// });

var lis = document.querySelectorAll('li');

for(var i=0;i<lis.length;i++)
{
    lis[i].addEventListener('click',function(id){this.style.color="red";});
}