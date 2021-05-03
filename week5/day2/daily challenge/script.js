
    const getData =(e) => {
        // e.preventDefault()
        let results = document.getElementById('search');
        // let div = document.createElement('div')
        // let img = document.createElement('img');
        

        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.giphy.com/v1/gifs/search?q=${results.value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        xhr.send();
        xhr.onload=function(){
            let varr = JSON.parse(xhr.response);
            createGifs(varr);
         }
        
    }
const createGifs=(obj)=>{

    for (let i = 0; i < 10; i++) {
        
        let gif = document.createElement('img');
        gif.setAttribute('src', obj.data[i].images['fixed_height_small'].url);
        gif.classList.add(i);
        document.getElementById('gifs').appendChild(gif);

        }
}
const eraseAll=()=> {
    let div =document.getElementById('gifs')
    for (let i = div.children.length-1; i >=0; i++) {
        div.removeChild(div.lastElementChild);
        
    }
}

document.getElementById('buttondelete').addEventListener('click', removeData);
document.getElementById('button').addEventListener('click', getData);
