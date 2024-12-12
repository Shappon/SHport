import React, { useEffect, useState } from "react";
import '../styles/DynamicBackgroundPage.css';

const DynamicBackgroundPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculez la couleur en fonction de la position de défilement
  const getBackgroundColor = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentage = scrollY / maxScroll;

    // Transition de bleu clair (#908fff) à bleu foncé (#3533cd) puis noir (#000000)
    const r = Math.min(0, Math.max(0, Math.floor(0 - 0 * percentage))); // Garde le rouge très bas pour un bleu océan
    const g = Math.min(71, Math.max(0, Math.floor(71 - 50 * percentage))); // Passe de 71 à 0
    const b = Math.min(171, Math.max(0, Math.floor(171 - 120 * percentage))); // Passe de 171 (bleu profond) à 0

    return `rgb(${r}, ${g}, ${b})`;
};

  return (
    <div
      className="dynamic-background-page"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="content">
        <h1>Bienvenue dans mon portfolio</h1>
        <p>Scrollez pour voir la magie !</p>
      </div>
      <div className="bottom-image">
        <img src="/path-to-your-image.jpg" alt="Bas de la page" />
      </div>
    </div>
  );
};

export default DynamicBackgroundPage;

