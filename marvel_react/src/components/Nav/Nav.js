import React from 'react';
import './Nav.css';
import Logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Nav = () => {
    const { logout } = useAuth();
    const { currentUser } = useAuth();
    const history = useHistory();
    return (
        <nav id="nav">
            <div className="nav-content">
                {/* {currentUser && <p>{currentUser.email}</p>} */}
                {currentUser && <Link id="signout" onClick={async e => {
                    e.preventDefault();
                    logout();
                    history.push('/');
                }}>Sign Out</Link>}
                <img src={Logo} alt="Marvel Logo" />
            </div>
        </nav>
    )
}
export default Nav;