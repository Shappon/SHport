import React from 'react';
import '../styles/Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Mise à jour des données avec les nouveaux paramètres
const skillsData = [
    {
        id: 1,
        name: 'HTML',
        level: 90,
        image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', // Icône HTML
        projects: 20,
        description: "Langage de base pour structurer les pages web.",
    },
    {
        id: 2,
        name: 'CSS3',
        level: 80,
        image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', // Icône CSS3
        projects: 15,
        description: "Permet de styliser les pages web avec des animations modernes.",
    },
    {
        id: 3,
        name: 'JavaScript',
        level: 75,
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', // Icône JavaScript
        projects: 12,
        description: "Langage de programmation pour rendre les sites interactifs.",
    },
    {
        id: 4,
        name: 'Laravel',
        level: 60,
        image: 'https://cdn-icons-png.flaticon.com/512/919/919830.png', // Icône Laravel
        projects: 8,
        description: "Framework PHP pour le développement d'applications web robustes.",
    },
    {
        id: 5,
        name: 'React',
        level: 70,
        image: 'https://cdn-icons-png.flaticon.com/512/919/919851.png', // Icône React
        projects: 10,
        description: "Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.",
    },
    {
        id: 6,
        name: 'Python',
        level: 30,
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png', // Icône Python
        projects: 5,
        description: "Langage polyvalent utilisé pour l'analyse de données et le backend.",
    },
];

const Skills = () => {
    return (
        <div className="skills">
           <div className="container">

                <h1>Mes skills</h1>
                <div className="skills-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-item">
                            {/* Image et niveau */}
                            <div className="skill-image">
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <div className="skill-progress">
                                <CircularProgressbar
                                    value={skill.level}
                                    text={`${skill.level}%`}
                                    styles={buildStyles({
                                        textColor: '#f5f5dc',
                                        pathColor: '#6b73ff',
                                        trailColor: '#ddd',
                                    })}
                                    className="custom-progress-bar"
                                />
                                <p className="skill-name">{skill.name}</p>
                            </div>

                            {/* Nouveaux paramètres */}
                            <div className="skill-details">
                                <p>
                                    <strong>Projets réalisés :</strong> {skill.projects}
                                </p>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
        </div>
    );
};

export default Skills;
