import React, { useEffect, useState } from "react";
import '../styles/DynamicAboutPage.css';
import photo1 from '../images/1.png';
import photo2 from '../images/2.png';
import photo3 from '../images/3.png';
import photo4 from '../images/4.png';
import photo5 from '../images/5.png';
import photo6 from '../images/6.png';
import photo7 from '../images/7.png';
import photo8 from '../images/8.png';
import Plongeur from '../components/plongeur.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentage = scrollY / maxScroll;

    const r = Math.min(0, Math.max(0, Math.floor(0 - 0 * percentage)));
    const g = Math.min(71, Math.max(0, Math.floor(71 - 50 * percentage)));
    const b = Math.min(171, Math.max(0, Math.floor(171 - 120 * percentage)));

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div
      className="dynamic-background-page"
      style={{ backgroundColor: getBackgroundColor() }}
    >
        <Plongeur />
      <div className="about">
        {/* Section Présentation */}
       
        
        <div className="about-card">
          <h1>Shuan Huynh</h1>
          <h2>
            Âgé de 25 ans, je suis un développeur UI/UX basé à Pérols, France.
          </h2>
          <p>
            Passionné par la création d'expériences utilisateur modernes,
            immersives, et élégantes. Bienvenue dans mon univers !
          </p>
        </div>
        

        {/* Section Images Dynamique */}
        <div className="about-gallery">
       
          {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8].map(
            (photo, index) => (
              <div className="gallery-item" key={index}>
                <img src={photo} alt={`Gallery item ${index + 1}`} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;



