//Grabbing object
let redbox = document.getElementById("animate");

//creating function to use sevrel times
  function myMove() {
 let position = 0; // marked starting point
 let interval= setInterval(startMove, 1); //set interval with paremeters
 function startMove(){  // created function inside function "nested function"
   if(position==350){    //created condition
     clearInterval(interval); // you need when using seInterval.. "stoping" animation
   } else {   //otherwise continue moving.
     position++;
     redbox.style.left=position+"px"  // move left
   }
 }
}