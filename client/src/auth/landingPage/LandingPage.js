import React from "react";
import './LandingPage.css';

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="landingPage">
                <div className="container">
                <div><span>Learn to code — for free.</span></div>
                <div><span>Build projects.</span></div>
                <div><span>Earn certifications.</span></div>
                <div><p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p></div>
                <div className="images_div">
                    <img src={process.env.PUBLIC_URL + '/images/apple.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/d45a0122-674c-4001-a482-cd8a07df81e8" ></img>
                    <img src={process.env.PUBLIC_URL + '/images/google.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/ddfb19e3-c21e-4bf9-ab3f-0d78de0c8ee3"></img>
                    <img src={process.env.PUBLIC_URL + '/images/microsoft.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/af68e919-d37a-4282-8ae0-0ff9d23ff9ae"></img>
                    <img src={process.env.PUBLIC_URL + '/images/spotify.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/3c3069fa-dbf3-422f-ac7a-705c5cd12c52"></img>
                    <img src={process.env.PUBLIC_URL + '/images/amazon.svg'} alt="https://github.com/Somu050600/FreeCodeCamp-Assignment/assets/119160374/9c9dd112-e805-4111-bf3b-fd0bd31c0190"></img> 
                </div>
                <div><a href="/signin">Get Started (it's free)</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LandingPage;