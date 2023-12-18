import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Home';
import Login from '../components/LoginForm';
import SignUp from '../components/SignUpForm';
import Profile from '../components/Profile';


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <PrivateRoute path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default MainRoutes;