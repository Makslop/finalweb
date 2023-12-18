import React from 'react';
import backgroundImage from '../images/fon.png';
import {Link} from "react-router-dom";

const Home = () => {
    const sectionStyle = {
        color: '#fff',
        padding: '20px',
        position: 'relative',
        textAlign: 'center',
        minHeight: '300px',
    };

    const textSectionStyle = {
        padding: '20px',
        textAlign: 'center',
    };

    const hrStyle = {
        border: '1px solid black',
        width: '50%',
        margin: '20px auto',
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <div>
            <section style={sectionStyle}>
                <img src={backgroundImage} alt="Background" style={imgStyle} />
            </section>

            <section style={textSectionStyle}>
                <hr style={hrStyle} />
                <Link to="/dashboard" className="btn btn-primary">Go find job</Link>
            </section>
        </div>
    );
}

export default Home;