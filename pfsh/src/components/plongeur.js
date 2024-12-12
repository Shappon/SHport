import React, { useEffect, useState } from "react";
import gifImage from "../images/pp.gif";
import '../styles/hom.css';


const Plongeur = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      // Calculez la position du défilement en pourcentage
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - windowHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <div className="scroll-sync-container">
      

      {/* GIF synchronisé avec la barre de défilement */}
      <div
        className="scroll-gif"
        style={{
          top: `${scrollPosition}%`,
        }}
      >
        <img src={gifImage} alt="GIF synchronisé" />
      </div>
    </div>
  );
};

export default Plongeur;
