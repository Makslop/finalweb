import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        setName('');
        setBio('');
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2>Profile Page</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                        Bio:
                    </label>
                    <textarea
                        className="form-control"
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSaveProfile}>
                    Save Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
