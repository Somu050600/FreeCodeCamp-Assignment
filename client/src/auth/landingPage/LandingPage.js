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
                    <img src={process.env.PUBLIC_URL + '/images/apple.svg'} ></img>
                    <img src={process.env.PUBLIC_URL + '/images/google.svg'} ></img>
                    <img src={process.env.PUBLIC_URL + '/images/microsoft.svg'} ></img>
                    <img src={process.env.PUBLIC_URL + '/images/spotify.svg'} ></img>
                    <img src={process.env.PUBLIC_URL + '/images/amazon.svg'} ></img> 
                </div>
                <div><a href="/signin">Get Started (it's free)</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LandingPage;