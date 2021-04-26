// Using this object :

// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
console.log(groceries);

let clone = Object.assign({}, groceries);
console.log(clone)

groceries.totalPrice = "35$";
console.log(groceries);  // No the clone wont change. 
// Object.assign({},object)

clone.other.payed = false;
console.log(clone);
// yes you will see the change because.. objects get passed by reffrence. we "shallow cloned" the first layer.

//deep cloning is used with 'JSON'.