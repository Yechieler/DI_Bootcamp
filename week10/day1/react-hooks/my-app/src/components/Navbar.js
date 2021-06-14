import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar=()=> {
    return (
        <nav className="nav-wrapper red darken-3">
            <Link className="brand-logo" to="./">Blog</Link>
            <div className="container">
                <ul className="right">
                    <li><NavLink exact to='./'>Home</NavLink></li>
                    <li><NavLink exact to='./about'>About</NavLink></li>
                    <li><NavLink exact to='./contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar; 