import React, { useState } from "react";
import '../styles/signup.css';
import "../styles/loginContainer.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async () => {
        const { username, password, reEnterPassword } = user;
        console.log(username, password, reEnterPassword);
        if(username && password && (password === reEnterPassword)) {
            alert("SUCCESSFUL!!")
            await axios.post("http://localhost:5000/signup", user)
            .then(res => {
                console.log(res.data)
                if(res.data === "WOHOOO!! SUCCESSFULLY SIGNEDUP") {
                    navigate('/login');
                }
            });
        } else {
            alert("Invalid Input");
        }
    }

    return (
        <div className="outerContainer" >
            <div className="innerContainer">
                <div className="signup">
                    {console.log("User", user)}
                    <h3>Signup</h3>
                    <input type="text" name="username" value={user.username} placeholder="Enter your username" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
                    <div className="button" onClick={register}>Signup</div>
                    <div>or</div>
                    <div className="button">
                        <Button onClick={() => {
                            navigate("/login");
                        }}>Login</Button> 
                    </div>
                </div>
            </div>
        </div>
    )
}