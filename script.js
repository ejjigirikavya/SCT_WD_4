function addTask(){

let task=document.getElementById("taskInput").value;
let date=document.getElementById("taskDate").value;
let time=document.getElementById("taskTime").value;

if(task==""){
alert("Enter Task");
return;
}

let li=document.createElement("li");

let taskInfo=document.createElement("div");
taskInfo.className="task-info";

let title=document.createElement("span");
title.innerHTML="<b>"+task+"</b>";

let dt=document.createElement("small");
dt.innerHTML=date+" "+time;

taskInfo.appendChild(title);
taskInfo.appendChild(dt);

let icons=document.createElement("div");
icons.className="icons";

let complete=document.createElement("i");
complete.className="fa-solid fa-check";

complete.onclick=function(){

title.classList.toggle("completed");

};

let edit=document.createElement("i");
edit.className="fa-solid fa-edit";

edit.onclick=function(){

let newTask=prompt("Edit Task",title.innerText);

if(newTask!=null && newTask!="")
title.innerText=newTask;

};

let del=document.createElement("i");
del.className="fa-solid fa-trash";

del.onclick=function(){

li.remove();

};

icons.appendChild(complete);
icons.appendChild(edit);
icons.appendChild(del);

li.appendChild(taskInfo);
li.appendChild(icons);

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";
document.getElementById("taskDate").value="";
document.getElementById("taskTime").value="";

}