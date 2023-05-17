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
                    <img src={process.env.PUBLIC_URL + '/images/search.svg'} height="15px"  alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/74683e38-5f44-4b90-ba48-e1a3382af715" />
                    <input type="text" placeholder="Search 9000+ tutorials"/>
                </div>
                <div onClick={homeHanler} className="nav_title">
                    {/* <span>FreeCodeCamp</span> */}
                    <img src={process.env.PUBLIC_URL + '/images/FreeCodeCamp.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/96a1691d-8af6-4e55-b3f3-f7daa3dd496d" />
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