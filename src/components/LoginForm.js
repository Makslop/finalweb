import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
    const { login, isAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticatedState, setAuthenticatedState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setAuthenticatedState(isAuthenticated());
    }, [isAuthenticated]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login({ email, password });

            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            {isAuthenticatedState ? (
                <p>You are already logged in.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default Login;