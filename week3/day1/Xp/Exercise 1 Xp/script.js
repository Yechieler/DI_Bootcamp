// Exercise 1 : Change The Navbar
// Instructions
//  <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.


let container = document.getElementById("navBar");


container.setAttribute("id","socialNetworkNavigation" )
console.log(container);



let add = document.getElementsByTagName("ul")[0];
let addLi = document.createElement('li');
let newTextNode = document.createTextNode("a new list.")
console.log(newTextNode);

addLi.appendChild(newTextNode);
console.log(addLi);
add.appendChild(addLi);


