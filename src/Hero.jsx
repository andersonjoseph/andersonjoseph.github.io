import { Tween, SplitChars } from 'react-gsap';

function Hero() {
    return (
        <div className="flex flex-wrap h-100vh items-center">

            <div>
                <div className="hero-title flex flex-wrap">
                    <div className="w-100pc md-w-10pc"></div> 
                    <div className="md-w-80pc">

                        <div className="subtitle">
                            <Tween from={{y: -500}}  stagger={0.2}>
                                <SplitChars wrapper={<p className="inline-block"/>}>
                                    Portafolios
                                </SplitChars>
                            </Tween>
                        </div>

                        <Tween from={{opacity: 0, y: 50}} to={{y: 0, opacity: 1}} duration={2}>
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

        </div>
    );
}

export default Hero;