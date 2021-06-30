import { Tween, ScrollTrigger } from 'react-gsap';

function AboutMe() {

    return(
        <div id="me" className="flex flex-wrap px-5 md-px-l5 h-100vh" style={{marginTop: "10em"}}>

            <div className="w-100pc md-w-50pc">
                <ScrollTrigger start="-200px center" end="200px center" scrub={1}>
                    <Tween from={{opacity: 0, x:100}} to={{opacity: 1, x:0}} duration={1}>
                        <h2 className="mb-l1">Ideas únicas necesitan una web única</h2>

                        <p>
                            <b>¡Hola!</b>👋 Soy <b>Anderson</b>. He ayudado a <b>40+ empresas, equipos y personalidades</b> a desarrollar aplicaciones y sitios web interactivos que impulsen la presencia de sus marcas en Internet.
                            <br/>
                            <br/>
                            <b>Si eres o tienes una marca digital creativa, estoy listo para ayudarte a construir un sitio web inolvidable para tu público</b>
                        </p>
                    </Tween>
                </ScrollTrigger>

            </div>

            <ScrollTrigger start="top bottom" end="bottom top" scrub={1}>
                <figure className="w-100pc md-w-50pc m-0 relative md-pl-9">

                    <Tween from={{ y: 0 }} to={{ y: -100 }} duration={2}>
                        <img className="absolute" src="/images/about1.webp" alt="" />
                    </Tween>

                    <Tween from={{ y: 0 }} to={{ y: -400 }} duration={1}>
                        <img className="absolute opacity-50" src="/images/about2.webp" alt="" />
                    </Tween>

                    <Tween from={{ y: 0 }} to={{ y: -400 }} duration={.5}>
                        <img className="absolute" src="/images/about3.webp" alt="" />
                    </Tween>

                </figure>
            </ScrollTrigger>

        </div>
    )
}

export default AboutMe;