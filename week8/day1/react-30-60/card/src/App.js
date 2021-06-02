import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
      searchText: '',
    }
  }

  componentDidMount = async()=>{
    try{
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      let data = await res.data;
      this.setState({arr:data})
    } catch(e) {
      console.log(e);
    }
  }

  //   //axios instead of fetch 
  //    await axious.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.data()) //not .json but .data
  //   .then(data => {
  //     // this.state.arr = data
  //     // console.log(this.state.arr);
  //     this.setState({arr:data})
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }


  //dont need this since its in our SearchBox
  // handleChange = (event) => {
  //   // console.log(event.target.value);
  //   // this.setState({ searchText:event.target.value })
  //   this.state.searchText = event.target.value;
  // }

  handleClick = (value) => {
    console.log('click');
    console.log(value);
    this.setState({searchText:this.state.searchText});
  }

  render(){
    const {arr,searchText} = this.state;

    const filteredRobots = arr.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className='tc'>
        <SearchBox handleChange={this.handleChange} handleClick={this.handleClick}/>
        <CardsList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
