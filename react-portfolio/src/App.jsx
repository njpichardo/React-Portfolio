import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [currentSection, setCurrentSection] = useState('About');

    const renderSection = () => {
        switch (currentSection) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div className="App">
            <Header />
            <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <main>
                {renderSection()}
            </main>
            <Footer />
        </div>
    );
};

export default App;