import React, { Component } from 'react';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactForm extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            message: '',
        },
        isFormSubmitted: false,
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log('Tick...');
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isFormSubmitted !== this.state.isFormSubmitted) {
            const timerId = setTimeout(() => {
                this.setState({ isFormSubmitted: false });
            }, 3000);


            return () => clearTimeout(timerId);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', this.state.formData);
        this.setState({
            formData: {
                name: '',
                email: '',
                message: '',
            },
            isFormSubmitted: true,
        });
    };

    render() {
        const { formData, isFormSubmitted } = this.state;

        return (
            <section className="container mt-5">
                <h2>Contact Us</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={this.handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

                {isFormSubmitted && (
                    <div className="mt-3 alert alert-success">
                        Form submitted successfully! We'll get back to you soon.
                    </div>
                )}
            </section>
        );
    }
}

export default ContactForm;