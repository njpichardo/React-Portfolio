import React from 'react';
import profileImage from '../assets/profile-image.jpg';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={profileImage} alt="Developer's Avatar" />
            <p>
                Hello! I'm a passionate web developer with experience in building single-page applications using React. 
                I love creating interactive and user-friendly interfaces. In my spare time, I enjoy learning new technologies 
                and contributing to open-source projects.
            </p>
        </section>
    );
};

export default About;