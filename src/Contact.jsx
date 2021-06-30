import { Tween, ScrollTrigger, SplitChars } from 'react-gsap';

function Contact() {

    function changeBgDarkColor() {
        document.body.style.backgroundColor = "#0c0e0d";
    }

    function changeBgLightColor() {
        document.body.style.backgroundColor = "#FFEC06";
    }

    return(
        <>
            <ScrollTrigger onEnter={changeBgDarkColor} onLeaveBack={changeBgLightColor} onLeave={changeBgLightColor}>
                <div id="contacto" className="flex flex-wrap px-l5" style={{ marginTop: "10em" }}>

                    <div className="w-100pc md-w-80pc">
                        <div className="subtitle white">
                            <ScrollTrigger>
                                <Tween from={{ x: -1000 }} stagger={0.2}>
                                    <SplitChars wrapper={<span className="inline-block white" />}>
                                        Contáctame
                                    </SplitChars>
                                </Tween>
                            </ScrollTrigger>
                        </div>

                        <Tween from={{ opacity: 0, y: 50 }} to={{ y: 0, opacity: 1 }} duration={2}>
                            <h2 className="lowercase mb-l2 white">
                                andersonjoseph@<br />
                                mailfence.com
                            </h2>
                            <p className="white w-80pc">
                                Actualmente estoy disponible para proyectos freelance. Di hola junto con una descripción sobre tu proyecto, y comencemos a trabajar juntos 🙌
                            </p>
                        </Tween>

                        <form className="my-l2 w-100pc md-w-60pc">
                            <div className="mb-5">
                                <label className="white">Tu Email</label>
                                <input className="block white" type="text" required />
                            </div>

                            <div className="mb-5">
                                <label className="white">Tu Mensaje</label>
                                <textarea className="block h-l7 white"></textarea>
                            </div>

                            <button className="white" type="submit">
                                Enviar
                            </button>

                        </form>

                    </div>

                </div>
            </ScrollTrigger>
        </>
    )

}

export default Contact