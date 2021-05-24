const host = () => {
	fetch(`http://localhost:4000/blah`)
		.then(res => res.json())
		.then(({firstname, lastname}) => {
			const body = document.querySelector("body");
			let p = document.createElement("p");
			p.innerHTML = `${firstname} ${lastname}`;
			body.appendChild(p);
		});
}

host();