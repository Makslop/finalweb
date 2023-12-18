import React from 'react';
import companies from '../companies';
const CompanyList = () => {
    return (
        <section>
            <h2>Company Listings</h2>
            <div className="row">
                {companies.map((company, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <img src={company.image} className="card-img-top" alt={company.name} style={{ maxWidth: '25%', height: 'auto'}} />


                            <div className="card-body">
                                <h3 className="card-title">{company.name}</h3>
                                <p className="card-text">Rating: {company.rating}</p>
                                <p className="card-text">Reviews: {company.reviews}</p>
                                <p className="card-text">Sector: {company.sector}</p>
                                <p className="card-text">Employees: {company.employees}</p>
                            </div>

                            <ul className="list-group list-group-flush">
                                {company.lusions && company.lusions.map((illusion, i) => (
                                    <li key={i} className="list-group-item">{illusion}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CompanyList;