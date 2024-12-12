import React, { useEffect, useState } from "react";
import "../styles/DynamicAboutPage.css";
import "../styles/Home.css";
import photo1 from "../images/1.png";
import photo2 from "../images/2.png";
import photo3 from "../images/3.png";
import photo4 from "../images/4.png";
import photo5 from "../images/5.png";
import photo6 from "../images/6.png";
import photo7 from "../images/7.png";
import photo8 from "../images/8.png";
import Plongeur from "../components/plongeur.js";
import "animate.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  // Array to store visibility state of each image
  const [visibility, setVisibility] = useState(
    Array(8).fill(false) // Initial state: all images hidden
  );

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      setScrollY(window.scrollY);

      // Update visibility for each image
      setVisibility((prevVisibility) =>
        prevVisibility.map((visible, index) => {
          const triggerPoint = (index + 0.4) / 9; // Trigger point for each image
          // If it's already visible, keep it visible
          if (visible) return true;

          // Make visible when scroll passes the trigger point
          return window.scrollY / maxScroll >= triggerPoint;
        })
      );
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

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];
  const handleScrollToGallery = () => {
    const gallerySection = document.querySelector(".about-gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="dynamic-background-page"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <Plongeur />
      <div className="about">
        {/* Section Présentation */}
        <div className="about-card animate__animated animate__fadeInDown">
          <h1 className="about-title animate__animated animate__bounceIn animate__delay-1s">Shuan Huynh</h1>
          <h2 className="about-subtitle animate__animated animate__fadeIn animate__delay-2s">
            Développeur UI/UX passionné, basé à Pérols, France
          </h2>
          <p className="about-description animate__animated animate__fadeIn animate__delay-3s">
          Je suis développeur spécialisé en création de sites web et d'applications. Voici mon portfolio, où vous découvrirez mes projets, mes compétences, et les services que je propose pour réaliser vos idées.
          </p>
          <button className="about-cta animate__animated animate__pulse animate__infinite animate__delay-4s"
                  onClick={handleScrollToGallery}>
            Explorez 
          </button>
        </div>

        {/* Section Images Dynamique */}
        <div className="about-gallery">
          {photos.map((photo, index) => (
            <div
              className={`gallery-item ${
                visibility[index]
                  ? "animate__animated animate__fadeInUp"
                  : "hidden" // Hidden class ensures the element is invisible before animation
              }`}
              key={index}
              style={{
                animationDelay: `${index * 0.2}s`, // Optional: staggered animation delay
              }}
            >
              <img src={photo} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
