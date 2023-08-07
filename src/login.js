import React, { useState } from "react";
import { Link } from "react-router-dom";


const Loginform=() =>{  
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Hello"+username)
        console.log("password"+password)
    }
    return(
        <form onSubmit={e =>{handleSubmit(e)}}>
            <div>
                <h1>Login Form</h1>
                <label htmlFor="username"> Username:</label>
                <input
                type="text"
                id="username"
                name="username" onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
               
            <Link to='/mainpage'><button>Click here</button></Link>
            
                <input
                type="reset"
                value={"cancel"}
                />
            </div>
           
        </form>
    )
}

export default Loginform