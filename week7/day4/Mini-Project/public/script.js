const getData=()=>{
    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;
    fetch(`http://localhost:5050/addItems?item=${item}&aomunt=${amount}`)
    .then(res => res.json())
    .then(data => {
        display(data)
    })
    .catch(err => {
        console.log(err);
    })

}
const display = (data) => {
	let root = document.getElementById("root");
	root.innerHTML = "";
	for (let i of data) {
		let p = document.createElement("p");
		p.innerText = `${i.item}: ${i.quantity}`;
		root.appendChild(p)
	}
}