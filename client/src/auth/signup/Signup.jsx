import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Signup.css';

const Signup = () => {
    const signupAPI = 'http://localhost:5050/user';
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

    const submitsignupForm = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('#signupForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#signup-btn');
        btnPointer.innerHTML = 'Please wait..';
        btnPointer.setAttribute('disabled', true);
        axios.post(signupAPI, formDataJSON).then((response) => {
            btnPointer.innerHTML = 'Signup';
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
            btnPointer.innerHTML = 'Signup';
            btnPointer.removeAttribute('disabled');
            alert("Oops! Some error occured.");
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
                    <form id="signupForm" onSubmit={submitsignupForm}>
                        <label >SignUp</label>
                        <div>
                            <label htmlFor={'signup-username'}>Your Name</label>
                            <input type="text" id={'signup-username'} name="name" required placeholder="Full Name"/>
                        </div>
                        <div>
                            <label htmlFor={'signup-email'}>Your Email</label>
                            <input type="email" id={'signup-email'} name="email" required placeholder="Email"/>
                        </div>
                        <div>
                            <label htmlFor={'signup-password'}>Your Password</label>
                            <input type="password" id={'signup-password'} name="password" required placeholder="Password"/>
                        </div>
                        <button type="submit" id="signup-btn">Signup</button>
                    </form>
                    <a href="/signin">or Signin</a>
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
export default Signup;