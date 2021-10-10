import React from 'react';
import './BackBtn.css';
import {Link} from 'react-router-dom';

export default function BackBtn() {
    return (
        <>
            <Link id="back" to="/profile"><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
        </>
    )
}
