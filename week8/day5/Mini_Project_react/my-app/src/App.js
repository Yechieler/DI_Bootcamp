import React from 'react'
import quotes from './QuotesDatabase';
import './App.css';

class  App extends React.Component {
  constructor(){
    super()
    this.state = {
      quoteList:quotes,
      newQuoteNum:0
    }
  }
  getRandomQuote=()=>{
    return Math.floor(Math.random()*this.state.quoteList.length)
  }
  getRandomColor=()=>{
    return Math.floor(Math.random()*255)
  }
  getNewQuote=()=>{
    let randomNum = this.getRandomQuote()
    this.setState({newQuoteNum:randomNum})
  }
  render(){
    let r = this.getRandomColor()
    let g = this.getRandomColor()
    let b = this.getRandomColor()
    
    let body = document.querySelector("body");
    body.style.background = `rgb(${r},${g},${b})`; 

  

    // style={{backgroundColor:`rgb(${r},${g},${b})`}}
    
    return (
    <div className='quoteWidth'>
     
      <div>
        <h1>
      {this.state.quoteList[this.state.newQuoteNum].quote}
        </h1>
        <h4>
      {this.state.quoteList[this.state.newQuoteNum].author}
        </h4>
      <button style={{backgroundColor:`rgb(${r},${g},${b})`}} onClick={this.getNewQuote}>New Quote</button>
      </div>

    </div>
  );
}
}

export default App;

