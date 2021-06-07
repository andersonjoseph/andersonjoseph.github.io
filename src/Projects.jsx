import { Tween, ScrollTrigger } from 'react-gsap';
import BlurryTilt from "./BlurryTilit";

function Project(props) {
    return(
        <div className="flex flex-wrap" style={{ marginTop: "10em" }}>
            {
                props.offset
                &&
                <div className="w-100pc md-w-10pc"></div> 
            }
            <figure className="w-100pc md-w-40pc">
                <BlurryTilt src={props.image} />
            </figure>
            <div className="w-100pc md-w-50pc">
                <h2 className="mb-l2">{props.title}</h2>

                <a href={props.link} className="details-link">
                    Ver Detalles
                </a>
            </div>
        </div>
    )

}

function Projects() {

    return(
        <div className="relative" style={{marginTop: "10em"}}>
            <ScrollTrigger start="-200px center" end="bottom top" scrub={1}>
                <Tween from={{ x: -100 }} to={{ x: -800 }} >
                    <div className="absolute left-0 top-0">
                        <h2 className="opacity-10 z--1" style={{ width: "max-content", fontSize: "6em" }}>
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                        </h2>
                    </div>
                </Tween>
            </ScrollTrigger>

            <h2 className="text-center">Proyectos</h2>

            <div style={{ marginTop: "10em", marginBottom: "10em" }}>

                <ScrollTrigger start="-200px center" end="center center" scrub={1}>
                    <Tween from={{x: -500, opacity: 0}} to={{x:0, opacity: 1}}>
                        <div>
                            <Project title="Otra Mirada" link="#" image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2021/04/60824d746302e377590395.jpg" />
                        </div>
                    </Tween>
                </ScrollTrigger>

                <ScrollTrigger start="-200px center" end="center center" scrub={1}>
                    <Tween from={{ x: 500, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
                        <div>
                            <Project offset={true} title="Otra Mirada" link="#" image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2021/04/60824d746302e377590395.jpg" />
                        </div>
                    </Tween>
                </ScrollTrigger>

                <ScrollTrigger start="-200px center" end="center center" scrub={1}>
                    <Tween from={{x: -500, opacity: 0}} to={{x:0, opacity: 1}}>
                        <div>
                            <Project title="Otra Mirada" link="#" image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2021/04/60824d746302e377590395.jpg" />
                        </div>
                    </Tween>
                </ScrollTrigger>

            </div>

        </div>
    )
}

export default Projects;