import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li key={section} className={currentSection === section ? 'active' : ''}>
                        <button onClick={() => setCurrentSection(section)}>
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;