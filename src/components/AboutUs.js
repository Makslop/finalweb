import React, { useState } from 'react';
import backgroundImage from '../images/your-image.jpg';
import "../styles/styles.css";
const AboutUs = () => {
    const [vacancyCount, setVacancyCount] = useState(15);
    const [companyCount, setCompanyCount] = useState(25);

    const overlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
    };

    return (
        <>
            <section className="sectionAbout sectionAbout-1" style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}>
                <div style={overlayStyle}>
                    <h2>
                        <br />About Us<br />
                    </h2>
                </div>
            </section>
            <section className="sectionAbout sectionAbout-2">
                <div>
                    <hr className="hrStyle" />
                    <h2>
                        <br />Our Services in Germany<br />
                    </h2>
                    <p>
                        Welcome to our company! We specialize in providing job search services in Germany,
                        connecting talented individuals with exciting opportunities. Whether you are a local job
                        seeker or an international candidate looking to work in Germany, we are here to assist you
                        in finding the right job that matches your skills and aspirations.
                    </p>
                </div>
            </section>
            <section className="sectionAbout sectionAbout-3">
                <hr className="hrStyle" />
                <h2>
                    <br />Vacancy and Company Statistics<br />
                </h2>
                <table className="tableStyle">
                    <thead>
                    <tr>
                        <th className="thTdStyle">Category</th>
                        <th className="thTdStyle">Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="thTdStyle">Vacancies</td>
                        <td className="thTdStyle">{vacancyCount}</td>
                        <td>
                            <button onClick={() => setVacancyCount(vacancyCount + 1)}>Increase</button>
                            <button onClick={() => setVacancyCount(Math.max(0, vacancyCount - 1))}>Decrease</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="thTdStyle">Companies</td>
                        <td className="thTdStyle">{companyCount}</td>
                        <td>
                            <button onClick={() => setCompanyCount(companyCount + 1)}>Increase</button>
                            <button onClick={() => setCompanyCount(Math.max(0, companyCount - 1))}>Decrease</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AboutUs;