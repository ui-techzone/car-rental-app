import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';
import './Login.css';
import carImage from '../../assets/images/car-10.jpg';

function Login() {
    let navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function loginUser() {
        const userObj = {
            username,
            password
        };
        userService.login(userObj).then((response) => {
            if(response.status === 200) {
                window.localStorage.setItem("isLoggedInUser", true);
                navigate("/home");
            }
        });
    }

    return (
        <div className="login-container">
            <main className="form-signin w-100 m-auto">
                <form>
                    {/* <img className="mb-4" src={carImage} alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {handleUsernameChange(e)}}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {handlePasswordChange(e)}}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={loginUser}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        </div>
    );
}

export default Login;