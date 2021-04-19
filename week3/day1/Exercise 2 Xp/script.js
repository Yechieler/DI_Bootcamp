// Exercise 2 : Users
// Instructions
// <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html>


// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


let newName = document.getElementsByTagName("li");
newName[1];
console.log(newName[1]);
newName[1].textContent = `Richard`;

let allUl = document.getElementsByClassName("list");

for(i=0;i<=allUl.length;i++){
    
    allUl[i].firstElementChild.textContent = "Yechiel";
   
};


