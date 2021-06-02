import React from 'react';

class BuggyCounter extends React.Component {
    constructor(){
        super();
        this.state = {
          counter: 0
        }
      }
      handleClick = () => {
        this.setState({counter:++this.state.counter})
      }
      render(){
          if (this,state.counter>4){
              throw new Error('I crashed!');
          }
          return(
              
      <div onClick={this.handleClick}>{this.state.counter}</div>
          )
      }
}

export default BuggyCounter;


// 1 create component page.
// 2 import React from 'react' 
// 3 const create function to display html 
// 4 export default and name of function or const..
// 5 import default on index.js
// 6 adding component into the render function