import React from 'react';
import './Home.css';

const HomePage = () => (
    <div className="home">
        <form className="homeForm">
            <h1>LOGIN</h1>
            <div className="input-group">
                <label for="name">Username</label>
                <input id="name" type="text" required />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input id="password" type="password" required />
            </div>
            <button className="homeBtn" type="submit">SUBMIT</button>
        </form>
        <form className="homeForm">
            <h1>SIGN UP</h1>
            <div className="input-group">
                <label for="name">Username</label>
                <input id="name" type="text" required />
            </div>
            <div className="input-group">
                <label for="email">Email</label>
                <input id="email" type="email" required />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input id="password" type="password" required />
            </div>
            <button className="homeBtn" type="submit">SUBMIT</button>
        </form>
    </div>
)
export default HomePage;