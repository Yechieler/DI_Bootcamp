import React from 'react';
import './hello.css';
import Button from 'react-bootstrap/Button'

const Hello = () =>{
    return(
        <div>
            <h2 className='green'>Hello</h2>
            <p className='blue'> from my first componet</p>
            <Button variant="primary">Primary</Button>{' '}
        </div>
    )
}
export default Hello;