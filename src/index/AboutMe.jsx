import { Tween, ScrollTrigger } from 'react-gsap';
import BlurryTilt from "../BlurryTilit";


function AboutMe() {

    return(
        <div id="init" className="flex flex-wrap" style={{marginTop: "10em"}}>

            <ScrollTrigger start="top bottom" end="bottom top" scrub={1}>
                <Tween from={{y: 0}} to={{y: -100 }} duration={.5}>
                    <figure className="w-100pc md-w-40pc m-0 relative">
                        <BlurryTilt src="images/rocket.png" />
                    </figure>
                </Tween>
            </ScrollTrigger>

            <div className="w-100pc md-w-10pc"></div>

            <div className="w-100pc md-w-50pc">
                <ScrollTrigger start="-200px center" end="200px center" scrub={1}>
                    <Tween from={{opacity: 0, x:100}} to={{opacity: 1, x:0}} duration={1}>
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

export default AboutMe;