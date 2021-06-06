import './App.css';
import { TimeLine, Tween, SplitChars, ScrollTrigger } from 'react-gsap';
import FOG from 'vanta/dist/vanta.fog.min';

import Tilt from "react-tilt";

import {useState, useRef, useEffect} from 'react';

function Hero() {
    return (
        <div className="">

            <div className="hero-title flex flex-wrap md-my-l5 md-mt-l5">
                <div className="w-100pc md-w-10pc"></div> 
                <div className="md-w-80pc">

                    <div className="subtitle">
                        <Tween from={{y: -500}}  stagger={0.2}>
                            <SplitChars wrapper={<p className="inline-block"/>}>
                                Portafolios
                            </SplitChars>
                        </Tween>
                    </div>

                    <Tween from={{opacity: 0}} to={{y: 50, opacity: 1}} duration={2}>
                        <h1>Anderson Joseph - Desarrollador Web </h1>
                    </Tween>

                </div>
            </div>

            <div className="flex justify-between">
                <div className="">
                    <Tween from={{y: -10}} to={{y: 10}} duration={2} repeat={-1} yoyo={true}>
                        <img src="images/arrow.svg" />
                    </Tween>
                </div>

                <div className="">
                    <a className="fw-900" href="#">
                        CON<br />
                            TAC<br />
                            TAR<br />
                    </a>
                </div>
            </div>

        </div>
    );
}

function BlurryTilt(props) {
    return(
        <div>
            <Tilt>
                <img className="absolute h-100pc opacity-50" src={props.src} />
            </Tilt>
            <Tilt>
                <img className="opacity-50" src={props.src} />
            </Tilt>
        </div>

    )
}

function AboutMe() {

    return(
        <div className="flex flex-wrap" style={{marginTop: "10em"}}>
            <figure className="w-100pc md-w-40pc m-0 relative">
                <BlurryTilt src="https://preview.redd.it/2n4g9vmz5e271.jpg?width=640&crop=smart&auto=webp&s=b08ededc0460a657e60439d255a1d93e7b2db447" />

            </figure>

            <div className="w-100pc md-w-10pc"></div>

            <div className="w-100pc md-w-50pc">
                <ScrollTrigger>
                    <Tween from={{opacity: 0, x:100}} to={{opacity: 1, x:0}} duration={2}>
                        <h2 className="mb-l1">Construyo aplicaciones y sitios web</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </Tween>
                </ScrollTrigger>
            </div>

        </div>
    )
}

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
        </div>
    );
}

export default App;
