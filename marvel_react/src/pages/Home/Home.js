import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// import Nav from '../../components/Nav/Nav';
import './Home.css';

const HomePage = () => {
    const history = useHistory();
    // const [username, setUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const { register } = useAuth();
    const { login } = useAuth();

    return (
        <>
            {/* <Nav /> */}
            <div className="home">
                <form className="homeForm" onSubmit={async e => {
                    e.preventDefault();
                    login(loginEmail, loginPassword)
                        .then((response) => {
                            console.log(response);
                            history.push('/profile');
                        })
                        .catch((error) => console.log(error.message))
                }}>
                    <h1>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="email" type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="password" type="password" required />
                    </div>
                    <button className="homeBtn" type="submit" >Submit</button>
                </form>
                <form className="homeForm" onSubmit={async e => {
                    e.preventDefault();
                    register(registerEmail, registerPassword)
                        .then((response) => {
                            console.log(response);
                            setRegisterEmail('');
                            setRegisterPassword('');
                        })
                        .catch((error) => console.log(error.message))
                }}>
                    <h1>Sign Up</h1>
                    {/* <div className="input-group">
                        <label htmlFor="name">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} name="name" id="username" type="text" required />
                    </div> */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} name="email" className="email" type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} name="password" className="password" type="password" required />
                    </div>
                    <button className="homeBtn" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default HomePage;