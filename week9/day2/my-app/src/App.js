import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { changePropertyOne, changePropertyTwo} from './redux/action';

import Child from './redux/Child';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      // prop1: state.property_one_one,
      // prop2: state.property_two_two,
    }
  }
  handleChange = (event) => {
    this.setState({prop1:event.target.value})
  }
  handleClick = () => {
    this.setState({prop2:this.state.prop1})
  }
  render(){
    
    return (
   <>
    <div className="App">
      <h1>Simple Redux Example</h1>
      <h3>Property One {this.props.prop1}</h3>
      <input type='text' onChange={this.props.handleChange}></input>
      <h3>Property Two {this.props.prop2}</h3>
      <button onClick={this.props.handleClick}>Click</button>
    </div>
   <Child />
   </>
  );
}
}
const mapStateToProps = (state) => {
  return{
    prop1:state.property_one,
    prop2:state.property_two
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    handleChange:(event)=> dispatch(changePropertyOne(event.target.value)),
    handleClick: () => dispatch(changePropertyTwo())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);







// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       prop1:[],
//       prop2:[]
//     }
//   }
//   render(){
    
//     return (
//     <div className="App">
//       <h1>Simple Redux Example</h1>
//       <p>Property One{}</p>
//       <input type='text'></input>
//       <p>Property Two{}</p>
//       <button onClick={()=>this.changeP('home')}></button>
//     </div>
//   );
// }
// }