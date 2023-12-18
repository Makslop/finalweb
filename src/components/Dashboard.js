import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchJobs = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://www.arbeitnow.com/api/job-board-api?location=${location}`);

            if (!response.ok) {
                throw new Error(`Error fetching data from the API. Status: ${response.status}`);
            }

            const data = await response.json();

            const filteredJobs = data.data.filter(job => job.location.toLowerCase() === location.toLowerCase());

            setJobs(filteredJobs);
        } catch (error) {
            console.error('Error fetching data from the API:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (location) {
            fetchJobs();
        }
    }, [location]);

    const removeGenderInfo = (title) => {
        return title.replace(/ \([^\)]+\)$/, '');
    };

    return (
        <div >
            <main>
                <h2 className="mb-4">Job Search</h2>
                <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control mr-2" type="text" id="location-input" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                    <button style={{marginTop: '10px'}} className="btn btn-primary" id="search-button" onClick={() => fetchJobs(location)}>Search</button>
                </form>

                {isLoading && <p>Loading...</p>}
                {error && (
                    <div className="alert alert-danger">
                        <p>Error: {error.message}</p>
                        {error.message.includes('404') && <p>No jobs found for the given location.</p>}
                    </div>
                )}
                {jobs && jobs.length > 0 ? (
                    <div className="search-results" style={{ display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px' }}>
                        {jobs.map((job) => (
                            <div key={job.slug} className="search-result" style={{ width: '50%', marginBottom: '1rem' }}>
                                <div className="card" style={{marginLeft: '10px'}}>
                                    <div className="card-body">
                                        <h3 className="card-title">{removeGenderInfo(job.title)}</h3>
                                        <p><strong>Company:</strong> {job.company_name}</p>
                                        <p><strong>Location:</strong> {job.location}</p>
                                        <p><strong>Type:</strong> {job.job_types.join(", ")}</p>
                                        <p><strong>Tags:</strong> {job.tags.join(", ")}</p>
                                        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
                                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No jobs found for the given location.</p>
                )}
            </main>
        </div>
    );
};

export default Dashboard;