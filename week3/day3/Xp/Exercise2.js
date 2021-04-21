let box = document.getElementById("box");

box.setAttribute("draggable","true");
box.setAttribute("ondragstart", "drag(event)");

let container = document.getElementById("container");

container.setAttribute("ondragover","allowDrop(event)");
container.setAttribute("ondrop","drop(event)");

function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData("text",event.target.id)
}
function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}