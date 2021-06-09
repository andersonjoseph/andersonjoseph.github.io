import { Tween, ScrollTrigger, SplitChars } from 'react-gsap';

function Contact() {

    return(
        <div id="contacto" className="flex flex-wrap" style={{ marginTop: "10em" }}>

            <div className="w-100pc md-w-10pc"></div>

            <div className="w-100pc md-w-80pc">
                <div className="subtitle">
                    <ScrollTrigger>
                        <Tween from={{ x: -1000 }} stagger={0.2}>
                            <SplitChars wrapper={<p className="inline-block" />}>
                                Contáctame
                            </SplitChars>
                        </Tween>
                    </ScrollTrigger>
                </div>

                <ScrollTrigger>
                    <Tween from={{ opacity: 0, y: 50 }} to={{ y: 0, opacity: 1 }} duration={2}>
                        <h2 className="lowercase mb-l2">
                            andersonjoseph@<br/>
                            mailfence.com
                        </h2>
                        <p>
                            Actualmente estoy disponible para proyectos freelance. Di hola junto con una descripción sobre tu proyecto, y comencemos a trabajar juntos 🙌
                        </p>
                    </Tween>
                </ScrollTrigger>

                <form className="my-l2 w-100pc md-w-40pc">
                    <div className="mb-5">
                        <label>Tu Email</label>
                        <input className="block" type="text" required />
                    </div>

                    <div className="mb-5">
                        <label>Tu Mensaje</label>
                        <textarea className="block h-l7"></textarea>
                    </div>

                    <button className="" type="submit">
                        Enviar
                    </button>

                </form>

            </div>

        </div>

    )

}

export default Contact