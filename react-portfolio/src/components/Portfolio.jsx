import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project One',
            image: 'link-to-image-1.jpg',
            deployedLink: 'https://deployed-link-1.com',
            githubLink: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            image: 'link-to-image-2.jpg',
            deployedLink: 'https://deployed-link-2.com',
            githubLink: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            image: 'link-to-image-3.jpg',
            deployedLink: 'https://deployed-link-3.com',
            githubLink: 'https://github.com/user/project-three'
        },
        {
            title: 'Project Four',
            image: 'link-to-image-4.jpg',
            deployedLink: 'https://deployed-link-4.com',
            githubLink: 'https://github.com/user/project-four'
        },
        {
            title: 'Project Five',
            image: 'link-to-image-5.jpg',
            deployedLink: 'https://deployed-link-5.com',
            githubLink: 'https://github.com/user/project-five'
        },
        {
            title: 'Project Six',
            image: 'link-to-image-6.jpg',
            deployedLink: 'https://deployed-link-6.com',
            githubLink: 'https://github.com/user/project-six'
        }
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-links">
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;