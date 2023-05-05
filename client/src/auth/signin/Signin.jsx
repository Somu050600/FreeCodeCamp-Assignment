import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Signin.css';


const Signin = () => {
    const signinAPI = 'http://localhost:5050/user/login';
    const navigate = useNavigate();

    const homeHanler = (credentialResponse, error) => {
        if(error) alert('some error occured');
        const token = credentialResponse.credential;
        localStorage.clear();
        localStorage.setItem('user-token', token);
        setTimeout(() => {
            navigate('/');
        }, 500);
    }
    

    const submiSigninForm = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('#signinForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#signin-btn');
        btnPointer.innerHTML = 'Please wait..';
        btnPointer.setAttribute('disabled', true);
        axios.post(signinAPI, formDataJSON).then((response) => {
            btnPointer.innerHTML = 'Signin';
            btnPointer.removeAttribute('disabled');
            const data = response.data;
            const token = data.token;
            if (!token) {
                alert(data);
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            setTimeout(() => {
                navigate('/');
            }, 500);
            }).catch((error) => {
            btnPointer.innerHTML = 'Signin';
            btnPointer.removeAttribute('disabled');
            alert("Oops! Some error occured."+error);
        });
    }
    return (
            <div className="signin_container">
            <nav className="signin_navbar">
                <div onClick={homeHanler} className="nav_title">
                    {/* <span>FreeCodeCamp</span> */}
                    <img src={process.env.PUBLIC_URL + '/images/FreeCodeCamp.svg'} alt="" />
                </div>
            </nav>
            <div className="form_container">
                <form id="signinForm" onSubmit={submiSigninForm}>
                    <label >Sign In</label>
                    <div>
                        <label htmlFor="signin-email">Your Email</label>
                        <input type="email" id={'signin-email'} name="email" required placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="signin-password">Your Password</label>
                        <input type="password" id={'signin-password'} name="password" required placeholder="Password"/>
                    </div>
                    <button type="submit" id="signin-btn">Sign In</button>
                </form>
                <a href="/signup">or SignUp</a>
                <div className="google_signin">
                    <GoogleOAuthProvider clientId="53240284106-3n37jfpcdv3ke7p6gb2amnhgm1fecds4.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => homeHanler(credentialResponse)}
                            onError={() => {
                            alert('Login Failed');
                        }}/>
                    </GoogleOAuthProvider>
                </div>
            </div>
            
        </div>
    );
}
export default Signin;