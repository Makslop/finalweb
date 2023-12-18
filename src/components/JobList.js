import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://www.arbeitnow.com/api/job-board-api');
                setJobs(response.data.data || []);
            } catch (error) {
                console.error('Error fetching job listings:', error);
            }
        };

        fetchJobs();
    }, []);

    const renderJobs = () => {
        return jobs.map(job => (
            <div key={job.slug} className="col-md-6 mb-4">
                <div className="card">
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
        ));
    };

    const removeGenderInfo = (title) => title.replace(/\s?\([mwdf\/]+\)\s?/ig, '');

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Job Listings</h2>
            <div className="row">
                {renderJobs()}
            </div>
        </div>
    );
};

export default JobList;
