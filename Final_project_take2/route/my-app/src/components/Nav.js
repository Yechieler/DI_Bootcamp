import React from 'react';
import '../componentStyle/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav id='nav' >
     
     <i id='logo' class="fas fa-seedling fa-3x"></i>
        <ul className='nav-links'>
            <Link id='link' to='/'>
                <li>About</li>
            </Link>
            <Link id='link' to='/login'>
                <li>Login</li>
            </Link>
            <Link id='link' to='/register'>
                <li>Register</li>
            </Link>
            <Link id='link' to='/home'>
                <li>Home</li>
            </Link>
        </ul>
     
    </nav>
  );
}

export default Nav;
