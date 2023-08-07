import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <>
            <h2>Welcome to my bus app</h2>
            <Link to='/login'><button>Login</button></Link>
        </>
    )
}

export default Welcome