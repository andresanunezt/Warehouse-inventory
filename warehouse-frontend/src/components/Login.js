import React, { useState, useEffect } from "react";
import axios from 'axios';
import ".//Login.css";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
   

    const submitform = (e) =>{
        e.preventDefault()
            axios.post (`http://localhost:3001/user/login`, {
                email: email,
                password: password
            }).then ((response) =>{
                 props.setUser(response.data.user)
                 
                 localStorage.setItem('userId', response.data.user.id)
                }).catch((error) =>{
                    console.log(error)
                })
                
    }
    // useEffect(() => { }, [props.setUser()])
            return(
    <div className = 'backgroundpic'>
        <div className = 'login'>
                <div class = 'login-container'>

                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                       
                        <button type = 'submit' value = 'Login!'>Login</button>
                    </div>

                </form>
                </div>
        </div>
    </div>
)
}


export default Login;



















