import React from 'react';
import './Profile.css';
import Nav from '../../components/Nav/Nav';
import hulk from '../../images/hulk.png';
import xmen from '../../images/xmen.png';
import { Link } from "react-router-dom";
// import { useAuth } from '../../context/AuthContext';

const ProfilePage = () => {
    // const { currentUser } = useAuth();

    return (
        <>
            <Nav />
            <div className="profile">
                <div className="row">
                    <div className="card">
                        <img src={hulk} id="img1" alt="hulk"/>
                        <Link className="profileSearchCharBtn" to="/search/character">Search Character</Link>
                    </div>
                    <div className="card">
                        <img src={xmen} id="img2" alt="xmen" />
                        <Link className="profileSearchComicBtn" to="/search/comic">Search Comics</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <Link className="profileSearchComicBtn" to="/write">Write Review</Link>
                    </div>
                    <div className="card">
                        <Link className="profileSearchComicBtn" to="/view">My Reviews</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePage;