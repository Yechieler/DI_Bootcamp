import React from 'react';

class Newcomp extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    componentDidMount(){
console.log('step3');
    }
    add = () =>{
        setState({count:++this.state.count})
        // this.state.count
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onclick ={this.add} > Add!!! </button>
            </div>
        )
    }
} 

const add =()=>{
    count = count +1
    console.log(count);
}

const Newcomp = ()=>{
    return(
        
        <div style={{textAlign='center'}}>
            <h2>{count}</h2>
            <button
                onClick={add}> Add 1!
            </button>
            </div>
    )
}