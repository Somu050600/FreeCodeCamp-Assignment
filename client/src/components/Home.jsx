import React from "react";
import { useState } from "react";
import './index.css'
import { Outlet, Link } from "react-router-dom";

export default function Home(){

    const [isHome, setHome] = useState(false);

    return(
        <>
        {isHome? (
            <>
                <div>Home Page</div>
            </>
        ):(
            <>
                <div className="landingPage">
                    <nav>
                        <div className="nav_search">
                            <img src="" alt="" />
                            <input type="text" placeholder="Search 9000+ tutorials"/>
                        </div>
                        <div className="nav_title">
                            <span>FreeCodeCamp</span>
                            <img src="" alt="" />
                        </div>
                        <div className="nav_menu">
                            <span>Menu</span>
                            <Link to ="/Signin"> Signin</Link>
                            {/* <button onClick={()=> signinHandler()} >Signin</button> */}
                        </div>
                    </nav>
                </div>
                <Outlet/>
            </>
        ) }
       </> 
    )
}