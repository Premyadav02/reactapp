import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <h1 className='nav'>Prem Yadav</h1>
            <div className='nav'>
               <Link to="/"><button className='home'>Home</button></Link>
               <Link to= "/skill"><button className='skill'>Skill</button></Link>
                <Link to= "/about"><button className='about'>About</button></Link>
            </div>
        </div>
    );
}

export default NavBar;
