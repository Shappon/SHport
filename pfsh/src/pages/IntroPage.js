import React, { useEffect } from 'react';
import '../styles/IntroPage.css';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroPage = () => {
    useEffect(() => {
        AOS.init(); // Initialise les animations au scroll
    }, []);

    return (
        <div className="intro-page">
            {/* Fond animé */}
            <div className="background-animation"></div>

            {/* Contenu principal */}
            <div className="intro-content">
                <h1 data-aos="fade-down">Bienvenue</h1>
                <h2 data-aos="fade-up">
                    Je suis{' '}
                    <Typewriter
                        words={[
                            'Développeur Web 💻',
                            'UI/UX Designer 🎨',
                            'Passionné par l\'innovation 🚀',
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </h2>
                <button
                    className="intro-button"
                    data-aos="zoom-in"
                    onClick={() => window.location.href = '/home'}
                >
                    En savoir plus
                </button>
            </div>
        </div>
    );
};

export default IntroPage;
