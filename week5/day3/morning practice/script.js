let xhr = new XMLHttpRequest();
let next = 0;
function fetchData(){
    let search = document.getElementById('search').value
    let limit = document.getElementById('limit').value
    xhr.open('GET',`https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${next}`)
    xhr.responseType = 'json'; //or log JSON.parse(xhr.response) its the same thing  on line 7
    xhr.send();  // send request
    xhr.onload = function(){
        // console.log(xhr.response);
        createImages(xhr.response.data);
    }
    xhr.onerror = function(){
        alert('Please try in a few minutes, server is down');
    };
    next = next + Number(limit);
}

function createImages(arr) {
    let root = document.getElementById('root')
    root.innerHTML = '';
    // console.log(arr);
    // console.log(root);
    arr.forEach((item,i) => {
        let img = document.createElement('img');
        img.setAttribute('src',item.images.fixed_height_small.url)
        root.appendChild(img)
    });
}

function deleteAll(){
    let root = document.getElementById('root');
    root.innerHTML = '';
}

function nextImages(){
    fetchData();
}