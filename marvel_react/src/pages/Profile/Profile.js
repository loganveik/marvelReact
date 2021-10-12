import './Profile.css';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import hulk from '../../images/hulk.png';
import xmen from '../../images/xmen.png';
import img1 from '../../images/img2.png';
import img2 from '../../images/img4.png';
import img3 from '../../images/img5.png';
import write from '../../images/writess.png';
import { Link } from "react-router-dom";

const ProfilePage = () => {

    return (
        <>
            <Nav />
            <div className="profile">
                <div className="row1">
                    <div className="card">
                        <img src={hulk} id="img1" alt="hulk" />
                        <Link className="profileBtn" to="/search/character">Search Character</Link>
                    </div>
                    <div className="card">
                        <img src={xmen} id="img2" alt="xmen" />
                        <Link className="profileBtn" to="/search/comic">Search Comics</Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="card">
                        <img src={write} id="img3" alt="undraw" />
                        <Link className="profileBtn" to="/write">Write Review</Link>
                    </div>
                    <div className="card">
                        <img src={img2} id="img4" className="viewPic" alt="undraw" />
                        <img src={img1} id="img5" className="viewPic" alt="undraw" />
                        <img src={img3} id="img6" className="viewPic" alt="undraw" />
                        <Link className="profileBtn" to="/view">My Reviews</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePage;