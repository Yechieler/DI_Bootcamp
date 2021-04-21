
//mine
// let ban = document.getElementById("div");
// console.log(ban);

// setTimeout(banner, 2000);
// function banner() {
   
//    ban.style.display="block"
//   }
  
//mine



  // example Banner
// without parameters
// example Banner
// without parameters
// setTimeout(showBanner, 5000);
// let section = document.querySelector("section");
// function showBanner(){
// 	let div = document.createElement("div");
// 	div.classList.add("banner");
// 	let text = document.createTextNode(`Sales end in 10min`);
// 	div.appendChild(text);
// 	section.appendChild(div);
// }
// //with parameters
// setTimeout(showBanner, 5000, "Zara");
// let section = document.querySelector("section");
// function showBanner(nameOfShop){
// 	let div = document.createElement("div");
// 	div.classList.add("banner");
// 	let text = document.createTextNode(`Sales end in 10min in ${nameOfShop}`);
// 	div.appendChild(text);
// 	section.appendChild(div);
// }


// let timer = setInterval(myTimer, 1000);

// function myTimer() {
//   let date = new Date();
//   let time = date.toLocaleTimeString();
//   // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
//   document.getElementById("demo").innerHTML = time;
// }

// function myStopFunction() {
//   clearInterval(timer);
// }

// setInterval(showBanner, 1000);

// let section = document.querySelector("section");

// let div = document.createElement("div");
// section.appendChild(div);
// div.classList.add("banner");

// function showBanner(){
// 	let text = document.createTextNode(`Sales end in 10min in ${nameOfShop}`);
// 	div.appendChild(text);
// }



//grabbing element
let divbanner = document.getElementById('banner');
//setting future "start" postion. creating counter to count down.
let start = 10;

//setting setIntervals function we are calling it countDown.
let countDown = function () {
    divbanner.innerText= `The sales end in ${start} sec !`
    if (start == 0) {
        clearInterval(int) //clears the movment of the interval (int) is out setInterval function.
    }
    start--;  //counting down
};

//
let int = setInterval(countDown, 1000)  // activate function(countDown), and relay it every second. (1000)