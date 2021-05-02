/*
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

// let numArr = ["1,2,5,6,7", "2,5,7,8,15"];


// function findIntersection(arr) {

//     for (let i = 0; i < numArr.length; i++) {
//         if( arr.split(i)) {
//         console.log(arr);
//     }
//     }
// }
// findIntersection(numArr);
    

const findIntersection = (array) => {
	let array1 = array[0].split(",");
	let array2 = array[1].split(",");
	let shared = array2.filter(num => 
		array1.includes(num))
	return shared;
}
findIntersection(["1,2,5,6,7", "2,5,7,8,15"]);