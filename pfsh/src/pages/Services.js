import React, { useRef, useState } from 'react';
import '../styles/Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Site Vitrine',
        price: '50€ + 5€ à 10€/mois',
        description: "Présentez votre activité avec un design élégant et une navigation simple, parfait pour établir une présence en ligne.",
    },
    {
        id: 2,
        title: 'Site Web Complet',
        price: '1000€ + 50€ à 150€/mois',
        description: "Un site interactif et personnalisé avec des fonctionnalités avancées pour captiver vos visiteurs.",
    },
    {
        id: 3,
        title: 'App Web Personnalisée',
        price: 'Adapter',
        description: "Une application sur mesure pour répondre à vos besoins spécifiques, idéale pour des projets complexes.",
    },
];

const Services = () => {
    const contactRef = useRef(null);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [showText, setShowText] = useState(false);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsHighlighted(true);
            setShowText(true); // Affiche le texte
            setTimeout(() => setIsHighlighted(false), 2000); // Supprime la surbrillance après 2 secondes
        }
    };

    return (
        <div className="services">
            <div className="services-grid">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-card">
                        <h2>{service.title}</h2>
                        <p className="price">{service.price}</p>
                        <p className="description">{service.description}</p>
                        <button className="cta-btn" onClick={scrollToContact}>
                            Me Contacter
                        </button>
                    </div>
                ))}
                {/* Carte pour numéro et email */}
                <div
                    ref={contactRef}
                    className={`service-card contact-card ${
                        isHighlighted ? 'highlighted' : ''
                    }`}
                >
                    <p className="price">06 24 05 15 22</p>
                    <p className="description">sthuynh.pro@gmail.com</p>
                    <div className="contact-buttons">
                        <button
                            className="cta-btn"
                            onClick={() => (window.location.href = 'tel:0624051522')}
                        >
                            Appeler
                        </button>
                        <button
                            className="cta-btn"
                            onClick={() => (window.location.href = 'mailto:sthuynh.pro@gmail.com')}
                        >
                            Envoyer mail
                        </button>
                    </div>
                    {showText && (
                        <p className="fade-in-text">N'hésitez pas !</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
