import React from "react";
// import { Outlet } from "react-router-dom";
import AuthNavbar from "./navbar/AuthNavbar";
import LandingPage from "./landingPage/LandingPage";

const Auth = () => {
    return (
        <React.Fragment>
            <AuthNavbar />
            <LandingPage/>
        </React.Fragment>
    );
}
export default Auth;