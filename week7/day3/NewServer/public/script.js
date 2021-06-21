const sendData = () => {
    const user = document.getElementById('user').value;
    fetch('http://localhost:5000/addUser', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({user})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const showData = async ()=>{
    try{
        const fetchData = await fetch('http://localhost:5000/showUsers')
    const data = await fetchData.json()
    await createData(data)
    // .then(res => res.json()) this is the same as line 21
    // .then(data => {
    //     console.log(data);
    // })  same 
    }catch (e){
        console.log(e);
    }

}

const createData = (arr) =>{
    let root = document.getElementById('root');
    arr.forEach(item => {
        let div = document.createElement('div');
        div.innerText = item.user;
        root.appendChild(div)
    });
}

const searchData=()=>{
    const user = document.getElementById('user').value;
    fetch(`http://localhost:5000/search/${user}`)
    .then(res => res.json())
     .then(data => {
         console.log(data);
     })
}

