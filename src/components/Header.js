import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isButtonsVisible, setButtonsVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            setButtonsVisible(false);
        } else {
            setButtonsVisible(true);
        }
    }, [isAuthenticated]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleProfileClick = () => {
        navigate('/userProfile');
    };

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">
                                Jobs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/companies">
                                Companies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutUs">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="auth-buttons">
                    {isButtonsVisible ? (
                        <>
                            <Link to="/login" className="btn btn-outline-success ml-2">
                                Login
                            </Link>
                            <Link to="/signUp" className="btn btn-outline-primary">
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <button to="/userProfile" className="btn btn-outline-info" onClick={handleProfileClick}>
                                Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline-danger ml-2"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
