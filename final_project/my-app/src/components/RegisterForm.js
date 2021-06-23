import React, {useState} from 'react';
// import axios from 'axios'; 
// import RegisterForm from './components/RegisterForm';

function RegisterForm({Login,error,setReturn}) {

    const [details, setDetails] = useState({name: '', email: '', password:''});

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/register', details)
       console.log(response);
    }
 

    return (
        <form method='post'
         onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Register</h2>
                {(error !== '') ? (<div className='error'>{error}</div>): ''}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input type='submit' id='button' value='REGISTER'></input>
                <input type='submit' id='return' value='RETURN' onClick={()=>setReturn('LoginForm')}></input>
            </div>
        </form>
    )
}

export default RegisterForm
