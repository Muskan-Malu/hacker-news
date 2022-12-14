import React, { useState } from "react";
import "../styles/login.css"
import "../styles/loginContainer.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import { Button } from "react-bootstrap";

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const login = async () => {
        const { username, password } = user;
        if(username && password) {
            await axios.post("http://localhost:5000/login", user)
            .then(res => {
                console.log(res.data);
                alert(res.data);
                if(res.data === 'LOGGED IN SUCCESSFULLY!!') {
                    navigate('/static', {
                        state: {
                            user: "Valid User"
                        }
                    });
                    // window.location.href = "http://localhost:3000/static";
                }
            });
        } else {
            alert("Invalid User");
        }
    }

    return (
        <div className="outerContainer" >
            <div className="innerContainer">
                <div className="login">
                    {console.log(user)}
                    <h3>Login</h3>
                    <input type="text" name="username" value={user.username} placeholder="Enter your username" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Enter your password"onChange={handleChange}></input>
                    <div className="button" onClick={login}>Login</div>
                    <div>or</div>
                    <div className="button">
                        <Button cssClass='e-outline' onClick={() => {
                            navigate('/signup');
                        }}>Signup</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}