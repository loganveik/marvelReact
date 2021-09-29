import React from 'react';
import './Home.css';

const HomePage = () => (
    <div className="home">
        <form>
            <h1>LOGIN</h1>
            <div class="input-group">
                <label for="name">Username</label>
                <input id="name" type="text" required />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input id="password" type="password" required />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
        <form>
            <h1>SIGN UP</h1>
            <div class="input-group">
                <label for="name">Username</label>
                <input id="name" type="text" required />
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input id="email" type="email" required />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input id="password" type="password" required />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
)
export default HomePage;