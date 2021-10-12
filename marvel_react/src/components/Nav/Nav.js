import './Nav.css';
import React, { useEffect } from 'react';
import Logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Nav = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const history = useHistory();

    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("token");
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
        }
    }, [])

    return (
        <nav id="nav">
            <div className="nav-content">
                <p>{user && user.displayName}</p>
                {user && <a id="signout" onClick={logout}>Log Out</a>}
                <img src={Logo} alt="Marvel Logo" />
            </div>
        </nav>
    )
}
export default Nav;