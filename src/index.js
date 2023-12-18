import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';


const root = document.getElementById('root') || document.createElement('div');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>
);