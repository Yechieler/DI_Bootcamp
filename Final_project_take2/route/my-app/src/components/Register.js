import React,{useState, useContext} from 'react';
import '../componentStyle/Home.css';
import { Redirect, useHistory } from 'react-router-dom';
import {AppContext} from '../App'



function Register() {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user,setUser}= useContext(AppContext);
    const [message,setMessage] = useState('');

    const history = useHistory();

    const register = (e)=>{
        e.preventDefault()
        console.log(name, email, password);
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body:JSON.stringify({name,email,password})

        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            if(data.message === 'registered'){
                setUser(data.user);
               history.push('/home')
            } else{
                // history.push('/login')
                setMessage(data.message);
            }
            console.log(data);
        })
        .catch(e=>{
            console.log(e);
        })
        
    }
    
  return (
    
     <form method='post' onSubmit={(e)=>register(e)}>
            <div className='form-inner'>
                <h1>Register</h1>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <br></br>
                    <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <br></br>
                    <input type='email' name='email' id='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <br></br>
                    <input type='password' name='password' id='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br></br>
                <input type='submit' className='submit' id='button' value='Register'></input>
                <div>{message}</div>
            </div>
        </form>
    
  );
}

export default Register;
