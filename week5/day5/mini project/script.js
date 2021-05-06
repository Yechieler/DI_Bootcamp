//Createing starting point
let display = document.getElementById('display');

//creating function on a button for api, fetch and await 
const findSomeone = async () =>{
    //creating a random number for my url 
    let random = Math.floor(Math.random() * 84);
    //creatings my loader icon
    display.innerHTML = `<i class="fas fa-spinner fa-pulse"></i>`
    //"try" to give me these
    try {
        const response = await fetch(`https://swapi.dev/api/people/${random}`)
        // my response is stored in a varible
        const data = await response.json();
        console.log(data);
        // recived object and at homeworld property 
        //grabing specifc info from object to search through. for each world is a different url and activating outer function within this one
        data.homeworld = await homeWorld(data.homeworld);
        // activating outer function within this one
        showDetails(data);
        //if an erro catch it and display this string
      } catch {
        display.innerHTML = `Oh No! That person isnt availble.`;
      }
    }

    // function that displays each randoms "person" info
const showDetails = (data)=>{
     display.innerHTML=`
                <h1>${data.name}</h1>
                <p>Height:${data.height}</p>
                <p>Gender:${data.gender}</p>
                <p>Birth Year:${data.birth_year}</p>
                <p>Home World:${data.homeworld}</p>`;
}

//used to fetch from another url and displayed along with the new information 
const homeWorld = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	// console.log(data.name);
	return data.name;
}


// data from fetch you put inside display"where you want it"

// getElementById