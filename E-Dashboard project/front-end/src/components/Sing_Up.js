import { Link, json, useNavigate } from "react-router-dom"
import React, { useState,useEffect } from "react";
let Sign_Up = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    }
    )
    const collectData = async () => {
        console.log(name, email, password)
        let result = await fetch('http://localhost:1700/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
         navigate('/')
    }
    return (
        <div >
            <form className="Sign_up">
                <h1>Sign_Up</h1>
                <input className="input-box" type="text" placeholder="Enter Name" value={name} onChange={(e) => SetName(e.target.value)}></input>
                <input className="input-box" type="text" placeholder="Enter Email" value={email} onChange={(e) => SetEmail(e.target.value)} ></input>
                <input className="input-box" type="text" placeholder="Enter Password" value={password} onChange={(e) => SetPassword(e.target.value)}></input>
                <button id="button" type="button" onClick={collectData} >Sign Up</button>
            </form>
        </div>
    )
}
export default Sign_Up;