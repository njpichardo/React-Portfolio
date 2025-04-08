import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors({
                ...errors,
                [name]: 'This field is required'
            });
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors({
                ...errors,
                email: 'Invalid email address'
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        if (newErrors.email && !validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission (e.g., send data to an API)
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;