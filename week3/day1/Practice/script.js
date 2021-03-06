// let
// //-----------------------------------
// //---------------- ACCESS ELEMENTS ON THE PAGE

// //get an element by its id
// let title = document.getElementById("title");
// console.log("Title is , ", title)


// //change the content of an element
// 	// 1. Access the element 
// 	// 2. If I want to change the content of an element
// 	// access the property textContent
// 	// 3. Change the textContent of the element

// let userName = "Dan";
// title.textContent = `Hello ${userName}`;


// // get elements by class name
// let paragraphs = document.getElementsByClassName("paragr");
// console.log(" the paragraphs : ", paragraphs);

// //change the background color of the 1st paragrph from pink to blue
// paragraphs[0].style.backgroundColor = "lightblue";

// //change the padding and margin of all the paragraphs

// for (let i = 0; i < paragraphs.length; i++){
// 	if ( i == 0 ){
// 		paragraphs[i].style.backgroundColor = "blue";
// 	} else {
// 		paragraphs[i].style.backgroundColor = "red";
// 		paragraphs[i].style.margin = "20px";
// 		paragraphs[i].style.padding = "10px";
// 	}
// }

// //get elements by tag name
// let allp = document.getElementsByTagName("p")
// console.log(allp)


// // get elements by relation : children, sibling, parent

// let container = document.getElementById("container");
// console.log(container)

// // // collection of the children of the div
// console.log(container.children)

// // // access one child in particular
// let paragraph = container.children[1];
// console.log(paragraph)

// // select the sibling 
// let secondchild = container.children[1];
// let thirdchild = secondchild.nextElementSibling;
// console.log(thirdchild)


// //-----------------------------------
// //---------------- ADD ELEMENTS TO THE PAGE

// // add a new element to my page
// // 1. Decide where I want to add my element

// let container = document.getElementById("container");

// // 2. Create an element (here I add an h3)

// let newElement = document.createElement("h3");
// console.log(newElement)

// // If I want I can add some style
// newElement.style.backgroundColor = "red"

// // If I want I can add some class to the element
// newElement.classList.add("title3")

// // 3. Create a text node 
// let newTextNode = document.createTextNode("I'm an H3");
// console.log(newTextNode)

// // 4. Add the text node to the element
// newElement.appendChild(newTextNode);
// console.log(newElement)

// // 5. Add the new element to the parent
// container.appendChild(newElement)


// //-----------------------------------
// //---------------- ADD ELEMENTS TO THE PAGE WITH ATTRIBUTES

// //Retrieve the div
// let container = document.getElementById("container");

// // Create an image element
// let image = document.createElement("img");

// // Add to my image a new attribute called src with a value https
// image.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/17/6d/f8/0d/dauphin.jpg");
// image.setAttribute("alt", "a dolphin");

// // add the image to the div
// container.appendChild(image)



// //-----------------------------------
// //---------------- EXERCISE WITH RANDOM IMAGES 


// let pics = [
//     "data:image/jpeg;base64,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",
//     "data:image/jpeg;base64,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",
//     "https://media-cdn.tripadvisor.com/media/photo-s/17/6d/f8/0d/dauphin.jpg"
// ];



// // create a function that is adding one image to the div
// // images URL is random : random from the pics array

// function randomImage () {
// 	//retrieve the place where I want to add the image
// 	let div = document.getElementById("listImages");

// 	// create an image element
// 	let img = document.createElement("img");
	
// 	//random number between 0 and pics.length -  is 3
// 	// 0 to pics.length not included
// 	// so from 0 to 2
// 	let randomNum = Math.floor((Math.random() * pics.length));
// 	console.log(randomNum);
	
// 	//retrieve an image from the pics array, depending on the random number
// 	let pic = pics[randomNum];

// 	//add 2 attributes to my img
// 	img.setAttribute("src", pic);
// 	img.setAttribute("alt", "animal");

// 	div.appendChild(img);

// 	console.log(document.body)
// }

// randomImage()

