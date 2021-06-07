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

    const [vantaEffect, setVantaEffect] = useState(0);

    const rootRef = useRef(null);

    useEffect( ()=> {

        if(!vantaEffect) {
            setVantaEffect(FOG({
                el: rootRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x3b5242,
                midtoneColor: 0x3d4a40,
                lowlightColor: 0x313131,
                baseColor: 0x111111,
                blurFactor: 0.10
            }))
        }

        return () => {
            if(vantaEffect) vantaEffect.destroy();
        }

    }, [vantaEffect]);

    return (
        <div className="App p-4 md-px-l5" ref={rootRef}>

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
