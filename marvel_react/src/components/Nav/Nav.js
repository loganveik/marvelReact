import React from 'react';
import './Nav.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <nav id="nav">
        <div className="nav-content">
            <Link id="link" to={props.link}>{props.back_signout}</Link>
            <img src={Logo} alt="Marvel Logo" />
            <p>Hello, Logan</p>
        </div>
    </nav>
)
export default Nav;