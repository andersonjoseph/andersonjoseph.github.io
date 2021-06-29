import { Tween, ScrollTrigger } from 'react-gsap';
import BlurryTilt from "../BlurryTilit";

function AboutMe() {

    return(
        <div id="init" className="flex flex-wrap" style={{marginTop: "10em"}}>

            <div className="w-100pc md-w-50pc">
                <ScrollTrigger start="-200px center" end="200px center" scrub={1}>
                    <Tween from={{opacity: 0, x:100}} to={{opacity: 1, x:0}} duration={1}>
                        <h2 className="mb-l1">Ideas únicas necesitan una web única</h2>

                        <p>
                            ¡Hola!👋 Soy Anderson. He ayudado a <b>40+ empresas y equipos</b> a desarrollar aplicaciones y sitios web interactivos que ayuden a impulsar la presencia de sus marcas en Internet.
                            <br/>
                        </p>
                    </Tween>
                </ScrollTrigger>

            </div>

            <ScrollTrigger start="top bottom" end="bottom top" scrub={1}>
                <Tween from={{ y: 0 }} to={{ y: -100 }} duration={.5}>
                    <figure className="w-100pc md-w-50pc m-0 relative">
                        <BlurryTilt src="images/rocket.png" />
                    </figure>
                </Tween>
            </ScrollTrigger>

        </div>
    )
}

export default AboutMe;