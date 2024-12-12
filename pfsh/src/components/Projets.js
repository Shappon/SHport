import React from 'react';
import '../styles/Projets.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const projectsData = [
    {
        id: 1,
        title: 'Portfolio React',
        completion: 90,
        technologies: ['ReactJS', 'CSS3', 'Flexbox'],
        gitRepo: 'https://github.com/votre-repo/portfolio-react',
        pdfDoc: '/docs/portfolio-doc.pdf',
    },
    {
        id: 2,
        title: 'Carte Historique dynamique',
        completion: 25,
        technologies: ['JavaScript', 'react.js', 'csv', 'Leaflet'],
        gitRepo: 'https://github.com/votre-repo/dashboard-analytics',
        pdfDoc: '/docs/dashboard-doc.pdf',
    },
    {
        id: 3,
        title: 'Site web vente de vetements',
        completion: 60,
        technologies: ['NodejS','ReactJS', 'TailwindCSS', 'Angular'],
        gitRepo: 'https://github.com/votre-repo/ecommerce-app',
        pdfDoc: '/docs/ecommerce-doc.pdf',
    },
    {
        id: 4,
        title: 'Smartcity Dijon',
        completion: 100,
        technologies: ['laravel', 'MySQL'],
        gitRepo: 'https://github.com/votre-repo/ecommerce-app',
        pdfDoc: '/docs/ecommerce-doc.pdf',
    },
    {
        id: 5,
        title: 'Webapp serrurier',
        completion: 45,
        technologies: ['NodejS','ReactJS', 'bootstrap'],
        gitRepo: 'https://github.com/votre-repo/ecommerce-app',
        pdfDoc: '/docs/ecommerce-doc.pdf',
    },
    {
        id: 6,
        title: 'Création plugin integration sur site Wordpress ',
        completion: 100,
        technologies: ['WP','phpmyadmin', 'Elementor'],
        gitRepo: 'https://github.com/votre-repo/ecommerce-app',
        pdfDoc: '/docs/ecommerce-doc.pdf',
    },
    {
        id: 7,
        title: 'Création site de formation ERP',
        completion: 100,
        technologies: ['NodejS','ReactJS', 'bootstrap'],
        gitRepo: 'https://github.com/votre-repo/ecommerce-app',
        pdfDoc: '/docs/ecommerce-doc.pdf',
    },
];

const Projets = () => {
    return (
        <div className="projets">
            <div className="container">
                <h1>Mes Projets</h1>
                <div className="projects-list">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-item">
                            {/* Titre du projet */}
                            <h2>{project.title}</h2>
                            
                            {/* Barre de progression */}
                            <div className="progress-wrapper">
                                <CircularProgressbar
                                    value={project.completion}
                                    text={`${project.completion}%`}
                                    styles={buildStyles({
                                        textColor: '#f5f5dc',
                                        pathColor: '#6b73ff',
                                        trailColor: '#ddd',
                                    })}
                                    className="custom-progress-bar"
                                />
                                <p>Progression</p>
                            </div>

                            {/* Technologies utilisées */}
                            <div className="technologies">
                                <h3>Technologies utilisées :</h3>
                                <ul>
                                    {project.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Boutons */}
                            <div className="project-buttons">
                                <a
                                    href={project.gitRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn git-btn"
                                >
                                    
                                </a>
                                <a
                                    href={project.pdfDoc}
                                    download
                                    className="project-btn pdf-btn"
                                >
                                   
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projets;
