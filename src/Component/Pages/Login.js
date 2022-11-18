import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../Uliti/LoginContex'

const Login = () => {

    const {logged,setLogged} = useLoginContext();
    const navigate = useNavigate();

    const userLogin = () => {
        setLogged(!logged);
        navigate('/cats')
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={userLogin}>Login</button>
        </div>
    )
}

export default Login