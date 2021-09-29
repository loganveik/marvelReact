import React from 'react';
import './Profile.css';
import hulk1 from '../../images/hulk1.png';
import hulk2 from '../../images/hulk2.png';
import comic from '../../images/comicbook.jpeg';


const ProfilePage = () => (
    <div className="profile">
        <div className="row">
            <div className="card">
                {/* <img src={hulk1} id="img1" />
                <a>Search Character</a> */}
            </div>
            <div className="card">
                <img src={hulk2} id="img1" />
                <a>Search Character</a>
            </div>
        </div>
        <div className="row">
            <div className="card"></div>
            <div className="card"></div>
        </div>
    </div>
)
export default ProfilePage;