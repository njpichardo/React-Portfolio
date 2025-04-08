import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Connect with me:</p>
                <ul className="social-links">
                    <li>
                        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;