import React, {useState, useContext} from 'react';
import '../componentStyle/Home.css'
import { useHistory } from 'react-router-dom'
import {AppContext} from '../App'
import App from '../App';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const {user,setUser}= useContext(AppContext);
    const [message,setMessage] = useState('');

    console.log('this is the user id',user);

    const logIn = (e)=>{
        e.preventDefault()
        console.log( email, password);
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body:JSON.stringify({email,password})

        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            if(data.message === 'registered'){
                console.log('this is the data.user',data.user);
                setUser(data.user);
                //use state and store id (store user id in a state /var and get in it home.js)
                history.push('/home')
             } else{
                 setMessage(data.message);
                 //make a usestate to set a message send erro to use message should be after the button click
             }
             console.log(data);
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
  return (
      <form  method='post' onSubmit={(e)=>logIn(e)}> 
        <div className='form-inner'>
        <h1>Login</h1>
        <div>
            <label htmlFor='email'>Email:</label>
            <br></br>
            <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
         <label htmlFor='password'>Password:</label>
         <br></br>
         
         <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        
                <input className='submit' type='submit' value='LOGIN'></input>    
                <div>{message}</div>        
        </div>
    </form>
  );
}

export default Login;
