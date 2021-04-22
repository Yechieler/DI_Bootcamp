let sideBar = document.getElementById("sidebar");
let btn = document.createElement("button")
let text = document.createTextNode("Clear");
sideBar.appendChild(btn);
btn.appendChild(text);
btn.addEventListener("click", callBack);
let clear ;
function callBack(event){
clear = event.style.backgroundColor="white";
console.log(callBack);
}


for (let i=0;i<3000;i++){
  let main = document.getElementById("main");
  let div = document.createElement("div")
  main.appendChild(div);
  div.classList.add("canvus"); 

  div.addEventListener("onmousedown", function() {
  div.style.backgroundColor=currantColor;
});
  div.addEventListener("mouseup", function() {
    mousedown = false;
  })
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
let currantColor ;
function grabber(event){
  currantColor = event.target.style.backgroundColor 
};
