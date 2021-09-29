import React from 'react';
import './Nav.css';
import Logo from '../../images/logo.png';
// import { Link } from 'react-router-dom';

const Nav = () => (
    // <div className='header'>
    <nav id="nav">
        <div class="nav-content">
            <img src={Logo} alt="Marvel Logo" />
            {/* <ul>
                <li><a href="">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li id="not"><a id="resume"
                    href="https://drive.google.com/file/d/1tiXCMvwznPjx71Ui0AOhlyu4aq9BEkrNFeg01pOKaHw/view">Resume</a>
                </li>
            </ul> */}
        </div>
    </nav>
    // </div >
    // </div>
)
export default Nav;