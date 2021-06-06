import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: '',
      genre: '',
      pub: '',
      data:false,}
  }
  handleChange=(e)=>{
    const value = e.target.value;
    this.setState({ [e.target.name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({data:true})
  }

  render() {
    let data = this.state.title+ ' ' +this.state.author+ ' ' +this.state.genre+ ' ' +this.state.pub
    let message = ''
    
    if(this.state.data){
       message = 'data sent!' 
    } else{
       message = ''
    }
     
   return ( <>
      
      <form onSubmit={this.handleSubmit}>
                    <h2>welcome</h2>
                    
                    <h4>please provide your info below</h4>
                    <input type='text' name='title' onChange={this.handleChange} placeholder='first name' required />
                    <br />
                    <input type='text' name='author' onChange={this.handleChange} placeholder='last name' required />
                    <br />
                    <input type='text' name='genre' onChange={this.handleChange} placeholder='phone' required />
                    <br />
                    <input type='text' name='pub' onChange={this.handleChange} placeholder='email' required />

                    <input type='submit' value='submit' />
                </form>
                
               
                {message}
            
</>
    )
  }
}
export default App;


























// import React from 'react';
// import useForm from 'react-hook-form';

// export default function App() {
//   const {register, handleSubmit, errors} = useForm();

//   const onSubmit = (data)=> {
//     console.log(data);
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder='Email' ref={register({})} />
//       <input type="password" placeholder='password' ref={register({required:true,minLength:8})} />
//       <input type="text" placeholder='Email' ref={register({})} />
//     </form>
//   )
// }