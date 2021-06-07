import './App.css';
import { Tween, ScrollTrigger } from 'react-gsap';
import FOG from 'vanta/dist/vanta.fog.min';

import {useState, useRef, useEffect} from 'react';

import Hero from './Hero';
import AboutMe from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';


function App() {
    return (
        <div className="App p-4 md-px-l5">

                <Tween to={{ height: 0 }} delay={3}>
                    <div style={{ backgroundColor: "#222725", height: "100%", position: "absolute", top: 0, left: 0, width: "100%", zIndex: "1" }}>
                    </div>
                </Tween>

                <Hero />
                <AboutMe />
                <Services />
                <Projects />
                <Contact />

                <div className="text-center" style={{marginTop: "10em"}}>
                    <small>2021 Anderson Joseph</small>
                </div>

        </div>
    );
}

export default App;
