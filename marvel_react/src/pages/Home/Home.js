import './Home.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import Logo from '../../images/logo.png';
import { ClipLoader } from 'react-spinners';

const HomePage = () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [registerLoading, setRegisterLoading] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onSignup = (e) => {
        e.preventDefault();
        setRegisterLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: username })
                    .then(() => {
                        setUsername('');
                        setRegisterEmail('');
                        setRegisterPassword('');
                    })
                    .catch(e => alert(e.message));
            }).catch(e => alert(e.message))
            .finally(() => setRegisterLoading(false))
    }

    const onLogin = (e) => {
        e.preventDefault();
        setLoginLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/profile');
            })
            .catch(e => alert(e.message))
            .finally(() => setLoginLoading(false))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/profile')
        }
    }, [])


    return (
        <>
            <nav id="nav">
                <div className="nav-content">
                    <img src={Logo} alt="Marvel Logo" />
                </div>
            </nav>
            <div className="home">
                <form className="homeForm">
                    <h1>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="email" type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="password" type="password" required />
                    </div>
                    <button className="login_btn" type="submit" onClick={onLogin}>{loginLoading ? <ClipLoader size={20} /> : 'Submit'}</button>
                </form>
                <form className="homeForm">
                    <h1>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="name">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} name="name" id="username" type="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} name="email" className="email" type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} name="password" className="password" type="password" required />
                    </div>
                    <button className="signup_btn" type="submit" onClick={onSignup}>{registerLoading ? <ClipLoader size={20} /> : 'Submit'}</button>
                </form>
            </div>
        </>
    )
}
export default HomePage;