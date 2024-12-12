import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [scrollTransparency, setScrollTransparency] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = 200;
            const scrollTop = window.scrollY;
            const transparency = Math.max(0.5, 1 - scrollTop / maxScroll);
            setScrollTransparency(transparency);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className="header"
            style={{
                backgroundColor: `rgba(0, 71, 171, ${scrollTransparency})`,
            }}
        >
            <div className="logo">
                <Link to="/">S.H Portfolio</Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </div>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/home" onClick={() => setMenuOpen(false)}>BONJOUR</Link>
                <Link to="/competences" onClick={() => setMenuOpen(false)}>COMPETENCES</Link>
                <Link to="/portfolio" onClick={() => setMenuOpen(false)}>PROJETS</Link>
                <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
            </nav>
        </header>
    );
};

export default Header;
