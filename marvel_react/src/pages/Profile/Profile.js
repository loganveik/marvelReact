import React from 'react';
import './Profile.css';
import hulk from '../../images/hulk.png';
import xmen from '../../images/xmen.png';


const ProfilePage = () => (
    <div className="profile">
        <div className="row">
            <div className="card">
                <img src={hulk} id="img1" />
                <a>Search Character</a>
            </div>
            <div className="card">
                <img src={xmen} id="img2" />
                <a>Search Comics</a>
            </div>
        </div>
        {/* <div className="row">
            <div className="card"></div>
            <div className="card"></div>
        </div> */}
    </div>
)
export default ProfilePage;