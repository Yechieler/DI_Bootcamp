let sideBar = document.getElementById("sidebar");
let btn = document.createElement("button")
let text = document.createTextNode("Clear");
sideBar.appendChild(btn);
btn.appendChild(text);
btn.addEventListener("click", callBack);
// let clear ;
function callBack(event){
clear = main.style.backgroundColor="white";
console.log(callBack);
}


for (let i=0;i<3000;i++){
  let main = document.getElementById("main");
  let div = document.createElement("div")
  main.appendChild(div);
  div.classList.add("canvus"); 
  div.addEventListener("click", applyColor);
  // div.addEventListener("mouseover", mouseDown)
}

function applyColor(event) {
	event.target.style.backgroundColor = currentColor;
}

function mouseDown(event) {
  event.target.style.backgroundColor = currentColor;
}

let sidebar = document.getElementById("sidebar");
for (let i=0;i<18;i++){
  let div = document.createElement("div")
  sidebar.appendChild(div);
  div.classList.add("paint");
  document.getElementsByClassName("paint")[i].style.backgroundColor=getRandomColor();
  div.addEventListener("click", grabber) 
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
let currentColor ;
function grabber(event){
  currentColor = event.target.style.backgroundColor 
  console.log(currentColor);
};




