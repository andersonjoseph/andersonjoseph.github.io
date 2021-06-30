import { Tween } from 'react-gsap';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useState, useEffect } from 'react';
gsap.registerPlugin(TextPlugin);

class CircularList {

    constructor(arr) {
        this.arr = arr;
        this.i = 0;
        this.current = arr[0];
        this.length = arr.length;
    }

    next() {

        if(++this.i >= this.length) {
            this.i = 0;
        }

        this.current = this.arr[this.i];
        
        return this.current;
    }

}

function Hero() {

    const [brandText, setBrandText] = useState('marcas creativas');

    useEffect(() => {

        const brandTexts = new CircularList(['creativos', 'músicos', 'streamers', 'creadores', 'agencias', 'estudios', 'diseñadores']);
        const interval = setInterval(() => {
            setBrandText(brandTexts.next());
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-wrap md-h-100vh items-center bg-no-repeat bg-r px-5 md-px-l5" style={{backgroundImage: 'url(images/header1.webp)', backgroundColor: "#ecdb0b", backgroundSize: '50em'}}>

            <div className="w-100pc">
                <div className="hero-title flex flex-wrap">
                    <div className="md-w-60pc">

                        <Tween from={{opacity: 0, y: 50}} to={{y: 0, opacity: 1}} duration={2}>
                            <h1 className="header-title text-stroke-white">
                                Desarrollo web para <br/> <Tween to ={{text: brandText}}><span style={{fontSize: 'inherit'}}>marcas creativas</span></Tween>
                            </h1>
                        </Tween>

                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <Tween from={{y: -10}} to={{y: 10}} duration={2} repeat={-1} yoyo={true}>
                        <div className="">
                            <a className="fw-900" href="#me">
                                <img alt="flecha" style={{width: "5em"}} src="images/arrow.svg" />
                            </a>
                        </div>
                    </Tween>

                    <div className="hidden md-block">
                        <a className="fw-900 white" href="#contacto">
                            <div style={{ width: "8em", height: "8em", border: "solid 4px yellow" }} className="rotate-20 bg-black br-round flex justify-center items-center contact-button" >
                                CONTÁCTAME
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;