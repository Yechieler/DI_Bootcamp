import React from 'react';
import './App.css';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    arr: [],
    city: ''
  }
}
getCity=(event)=> {
  this.setState({city:event.target.value})
}
  getWeather=()=> {
    // this.setState({arr:[]})
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.state.city}&days=3`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3e62a87d8bmshfa608b6d0308c3fp12ad72jsna5a7d0944074",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
  const day = (this.data.forecast.forecastday[0].day);
})
.catch(err => {
	console.error(err);
});
  }

render() {
  return (
    <div className="App">
      <h1>Whats The Weather?</h1>
    <input type="text" placeholder='City...' onChange={this.getCity} />
    <input type="text" placeholder='Country...'/>
    <button onClick={this.getWeather}>Search</button>
    <div>
      {this.state.arr.map(item=>{
        return(
          <div>
            {this.day}
          </div>
        )
      })}
    </div>
    </div>

  );
}
}

export default App;
