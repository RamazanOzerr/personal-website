import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <About />
                        <Education />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                    </>
                } />
            </Routes>
            <Footer />
            <Analytics />
        </Router>
    );
}

export default App;
