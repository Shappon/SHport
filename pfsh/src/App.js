import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Services from './pages/Services.js';
import IntroPage from './pages/IntroPage.js';
import Portfolio from './pages/Portfolio.js'
import About from './pages/About.js'; // Créez également About.js
import Competences from './pages/Competences.js'; // Créez également Skills.js
import Home from './pages/Home.js'; // Créez également Portfolio.js


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/Competences" element={<Competences />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                
            </Routes>
        </Router>
    );
};

export default App;
