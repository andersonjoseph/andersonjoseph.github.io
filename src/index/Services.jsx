import { Tween, ScrollTrigger, SplitChars } from 'react-gsap';

function Services() {

    return(
        <div className="flex flex-wrap" style={{marginTop: "10em"}}>


            <div className="text-center uppercase">
                <div className="subtitle">
                    <ScrollTrigger>
                        <Tween from={{ x: -1000 }} stagger={0.2}>
                            <SplitChars wrapper={<span className="inline-block black" />}>
                                Servicios
                            </SplitChars>
                        </Tween>
                    </ScrollTrigger>
                </div>

                <ScrollTrigger>
                    <Tween from={{ opacity: 0, y: 50 }} to={{ y: 0, opacity: 1 }} duration={2}>
                        <h2>Sitios web, rediseños, ecommerce, optimizaciones</h2>
                    </Tween>
                </ScrollTrigger>

            </div>

        </div>

    )

}

export default Services;