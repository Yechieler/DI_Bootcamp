let container = document.getElementById("container");
 console.log(container);

 console.log(document.body.children[1])


// let container2 = document.getElementsByTagName("ul");
// console.log(container2[0]);

// // console.log(container2[0].children[0].parentNode);
// console.log(container.nextElementSibling);
// let ul = container.nextElementSibling

// console.log(ul.children[1])

// console.log(ul.lastElementChild)

// document.getElementsByTagName("second").innerHTML="Dont Do anythign I wouldnt do."

// let excess = document.getElementById("container");
// console.log(excess);

// console.log( document.body.children[0]);

// let excess2 = excess.nextElementSibling;
// console.log(excess2.children[1])



// ex 1 page 2
let newDiv = document.getElementById("dI")
let href = document.getAttribute('href');
for (let href of dI.attributes) {
    alert(href.name + '=' + href.value);
}