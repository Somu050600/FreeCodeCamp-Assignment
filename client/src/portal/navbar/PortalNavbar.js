import React from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';

const PortalNavbar = () => {
    const navigate = useNavigate();

    const signoutHandler = () => {
        localStorage.clear();
        googleLogout();
        navigate('/signin');
    }
    return (
        <React.Fragment>
            <nav className="auth_navbar">
                <div className="nav_search">
                    <img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
                    <input type="text" placeholder="Search 9000+ tutorials"/>
                </div>
                <div className="nav_title">
                    {/* <span>FreeCodeCamp</span> */}
                    <img src={process.env.PUBLIC_URL + '/images/FreeCodeCamp.svg'} alt="" />
                </div>
                <div className="nav_menu">
                    <span>Menu</span>
                    <button onClick={()=> signoutHandler()} >Signout</button>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default PortalNavbar;