import React from 'react';
import { connect } from 'react-redux';
import {changePropertyOne} from './action'

const Child = (props) => {
    return (
        <div className='App'>
            <h1>Child haha</h1>
            {props.property_one}<br/>
            {props.property_two}<br/>
            <input type='text' onChange={props.handleChange}></input>
        </div>
    )
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
      }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Child);