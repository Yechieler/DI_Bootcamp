let sentence = "The movie is not that bad , it was great";
console.log(sentence)
// split method : convert an string into a array.
// we decided to split with a space : because we want every word to be pushed inside an array
// we know that every word, are spaced with spaces
let sentence_array = sentence.split(" ");
// console.log("sentence array", sentence_array)

// method : indexOf -> position of an specific item
// POSITION OF THE word "not" -> returns a number
let wordNot = sentence_array.indexOf("not");
// POSITION OF THE word "bad" -> returns a number
let wordBad = sentence_array.indexOf("bad") ;
console.log(`The word NOT is at the position ${wordNot}, The word BAD is at the position ${wordBad}`)

// we check if the position of the word "not" is before the position of the word "bad"
// AND we check if the word "not" and the word "bad" exist in the array
// if indexOf(item) return -1 : it means that the item doesn't exist inside the array
if (wordNot < wordBad &&  wordNot != -1 && wordBad != -1){
	//splice method
	//       1st parameter: the starting point: the position where we want to start adding or deleting
	//       2nd parameter: how many items I want to remove
	// 		 3rd parameter : the items I want to add, at the starting point
	sentence_array.splice(wordNot, wordBad - wordNot + 1, "good")
	// join method : convert an array into a string.
	// we decided to join with a space : because words are spaced with spaces
	let new_sentence = sentence_array.join(" ")
	console.log(new_sentence)
}



// same thing 


let sentance = "the movie is not that bad, it was good";
let sentance_array = sentance.split(" "); //split is a method the splits the words of a string. you musst tell him how to split .

//we just told the cpu to split by spaces. Split makes a string into an array. how do you want to split? (" "). ("") this will split every letter.
console.log("sentence array", sentance_array)

//method :indexOf -> position not and bad
//
let wordNot = sentence_array.indexOf("not");
let wordBad = sentance_array.indexOf("bad");

// how do you check 

// lower because its is a number in a string. "if it comes before".
if (wordNot < wordBad && wordNot != -1 && wordBad != -1){
    
}
