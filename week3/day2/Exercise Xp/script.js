//1 Using DOM methods, remove the last paragraph in the <article> tag from the DOM.

let element = document.getElementsByTagName('article')[0];
console.log(element);
// element.setAttribute("id", "Erase");
// let newId = document.getElementById("Erase");

element.removeChild(element.childNodes[13]);

//2 Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.

let h2element = document.getElementsByTagName("h2")[0];
// console.log(h2element);

h2element.addEventListener("click",function() {
    h2element.style.backgroundColor="red" 

})






//3 Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)


//4 Add an event listener which will hide the h3 when it’s clicked on (use the display property).
//5 Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
//6 When the “Submit” button of the form is clicked:
//6.1 get the values of the input tags
//6.2 make sure that they are not empty,
//6.3 then append them to a HTML table, in the div, below the form.
//7 When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
