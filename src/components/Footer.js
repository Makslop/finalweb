import React from 'react';
import '../styles/styles.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About</h5>
                        <p>We're here to help you find a job faster with Indeed.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Jobs</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Company Home</a></li>
                            <li><a href="/jobs" className="text-light">Jobs Companies</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Contact details for your company</p>
                        <p>Email: <a href="mailto:info@example.com" className="text-light">info@example.com</a></p>
                        <p>Phone: <span className="text-light">+1 (555) 123-4567</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;