let root = document.getElementById('root');
let list_country1 = document.getElementById('list_country1');
let list_country2 = document.getElementById('list_country2');
let button = document.getElementById("button");

let accessKey = "6b543e9294a71d26a6606f5449cf71a6";

const getCurrencies = (async()=> {
    const response = await fetch(`http://api.currencylayer.com/list?access_key=${accessKey}`)
    const data = await response.json();
    // console.log(getCurrencies);
    
})
getCurrencies();