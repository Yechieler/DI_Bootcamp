import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';


class App extends Component {
    constructor(){
        super()
        this.state ={
        robots: robots,
        searchfield: ''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value});
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredRobots);
    }
    render(){

        return (
            <div className='tc'>
            <h1>RoboFreinds</h1>
            <SearchBox searchChange={this.state.onSearchChange}></SearchBox>
            <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;