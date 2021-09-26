var btn = document.getElementsByTagName('button');
console.log(btn);
btn[0].addEventListener('click',storetask);
var counter=0;
function storetask(){
    console.log(this);
    let task = document.getElementById('todo');
    let tasklist=[];
    tasklist.push(task.value);
    var key = Math.floor(1000 + Math.random() * 9000);
   // for(var i =counter;i<=counter;counter++)
    //{
        var ul = document.getElementById("dynamic-list");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.setAttribute('type' ,'checkbox');
        checkbox.setAttribute('name' ,'todoo');
        checkbox.setAttribute('value' ,'todo0');
        checkbox.setAttribute('id' ,key);
       // checkbox.setAttribute('id' ,'todocheck');
        var label = document.createElement('label');
        label.setAttribute('htmlFor' ,key);
        var dele = document.createElement("button");
        dele.setAttribute('type' ,'button');
        dele.setAttribute('name' ,'delete');
        //dele.setAttribute('innerHTML' ,'Delete');
        dele.innerHTML = '&#x2715';
        var text = document.createTextNode(tasklist[0]);
        label.appendChild(text);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(dele);
        //checkbox.appendChild(label);
        //li.appendChild(checkbox);
        ul.appendChild(li);
        tasklist.pop();
        checkbox.addEventListener('change',checkfunc);
        dele.addEventListener('click',itemdelete);
    //}
    //let display=document.querySelector(".container");
    //display.innerText=tasklist[0];
    //counter=counter+1;
}
function checkfunc(){
    this.style.width=100;
    if(this.checked) {
        console.log(this.parentElement);
        this.parentElement.style["background-color"] = "green";
        this.parentElement.style["text-decoration"]= "line-through";
    } else {
        this.parentElement.style["background-color"] = "green";
    }
}

function itemdelete(){
    console.log(this);
    this.parentElement.remove();
}