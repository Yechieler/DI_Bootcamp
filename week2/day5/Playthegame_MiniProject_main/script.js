function playTheGame() {
    let letsPlay = confirm("Do you want to play?");

    

    if (letsPlay==true) {
        let userNumber = prompt("Pick a number between 0-10") 
        if ( isNaN(userNumber)) {
            alert('Sorry Not a number, Goodbye.')
        } else if (userNumber<0 || userNumber>10){
            alert("Sorry, it’s not a good number Goodbye")
        } else  {
            let computerNumber = Math.floor(Math.random()*10)
             test(userNumber, computerNumber)
    
        }
   
    }
    else {
      alert("No problem, Goodbye.")
  }


}

let count = 0;
function test(userNumber,computerNumber) {
    
    while(count < 3) {
    if (userNumber==computerNumber) {
        alert("Winner.")
    } else if (userNumber>computerNumber) {
        userNumber = prompt("Your number is bigger then the computer's, guess again")
    } else if(userNumber<computerNumber) {
        userNumber = prompt("Your number is smaller then the computer's, guess again")
    } 
    count++
}
}