import { Tween, SplitChars } from 'react-gsap';

function Hero() {
    return (
        <div className="flex flex-wrap h-100vh items-center">

            <div>
                <div className="hero-title flex flex-wrap">
                    <div className="md-w-80pc">

                        <div>
                            <Tween from={{y: -500}}  stagger={0.2}>
                                <SplitChars wrapper={<h3 className="inline-block"/>}>
                                    Anderson Joseph
                                </SplitChars>
                            </Tween>
                        </div>

                        <Tween from={{opacity: 0, y: 50}} to={{y: 0, opacity: 1}} duration={2}>
                            <h1>Desarrollo sitios web para marcas creativas</h1>
                        </Tween>

                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <Tween from={{y: -10}} to={{y: 10}} duration={2} repeat={-1} yoyo={true}>
                        <div className="">
                            <a className="fw-900" href="#init">
                                <img alt="flecha" style={{width: "5em"}} src="images/arrow.svg" />
                            </a>
                        </div>
                    </Tween>

                    <div className="hidden md-block">
                        <div className="rotate-20 bg-black br-round flex justify-center items-center" style={{width: "8em", height: "8em"}}>
                            <a className="fw-900 white " href="#contacto">
                                CONTACTAME
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;