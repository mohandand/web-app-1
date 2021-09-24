var btn = document.getElementsByTagName('button');
console.log(btn);
btn[0].addEventListener('click',storetask);
var counter=0;
function storetask(){
    let task = document.getElementById('todo');
    let tasklist=[];
    tasklist.push(task.value);
   // for(var i =counter;i<=counter;counter++)
    //{
        var ul = document.getElementById("dynamic-list");
        var li = document.createElement("li");
        var text = document.createTextNode(tasklist[0]);
        li.appendChild(text);
        ul.appendChild(li);
        tasklist.pop();
    //}
    //let display=document.querySelector(".container");
    //display.innerText=tasklist[0];
    //counter=counter+1;
}