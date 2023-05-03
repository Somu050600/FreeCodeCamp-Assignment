import React from "react";
import { useNavigate } from "react-router-dom";
import './AuthNavbar.css'


const AuthNavbar = () => {
    const navigate = useNavigate();
    
    const homeHanler = () => {
        navigate("/")
    }

    const signinHandler = () =>{
        navigate("/signin")
    }

    return(
        <React.Fragment>
            <nav className="auth_navbar">
                <div className="nav_search">
                    <img src={process.env.PUBLIC_URL + '/images/search.svg'} height="15px"  alt="" />
                    <input type="text" placeholder="Search 9000+ tutorials"/>
                </div>
                <div onClick={homeHanler} className="nav_title">
                    {/* <span>FreeCodeCamp</span> */}
                    <img src={process.env.PUBLIC_URL + '/images/FreeCodeCamp.svg'} alt="" />
                </div>
                <div className="nav_menu">
                    <span>Menu</span>
                    <button onClick={()=> signinHandler()} >Signin</button>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default AuthNavbar;