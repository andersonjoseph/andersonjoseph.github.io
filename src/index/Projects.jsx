import { Tween, ScrollTrigger } from 'react-gsap';
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { useRef } from 'react';

function flip(elements, changeFunc, vars) {
    elements = gsap.utils.toArray(elements);
    vars = vars || {};
    let tl = gsap.timeline({ onComplete: vars.onComplete, delay: vars.delay || 0 }),
        bounds = elements.map(el => el.getBoundingClientRect()),
        copy = {},
        p;
    elements.forEach(el => {
        el._flip && el._flip.progress(1);
        el._flip = tl;
    })
    changeFunc();
    for (p in vars) {
        p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
    }
    copy.x = (i, element) => "+=" + (bounds[i].left - element.getBoundingClientRect().left);
    copy.y = (i, element) => "+=" + (bounds[i].top - element.getBoundingClientRect().top);
    return tl.from(elements, copy);
}

function Project(props) {

    const textRef = useRef();
    const imageRef = useRef();

    function handleProjectClick(ev) {

        const tl = gsap.timeline();
        const fullContainer = document.getElementById("full-container")
          
        function animateImage() {
            flip(
                imageRef.current, 
                () => fullContainer.appendChild(imageRef.current),
                {
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: () =>{
                        fullContainer.classList.add("z-10");
                        fullContainer.classList.replace("fixed-center", "fixed-full");
                        imageRef.current.style.transition = "1s";
                        imageRef.current.style.opacity = .1;
                        setTimeout(() => window.scrollTo(0, 0), 1000);
                    } 
                }
                )

        }


        tl.to(textRef.current.querySelector("h2"), {
            y: '100%',
            duration: .5,
            ease: "power1.out",
        });

        tl.to(textRef.current.querySelector("p"), {
            y: '100%',
            duration: .5,
            ease: "power1.out",
            onComplete: animateImage
        });


    }

    return(
        <div className="flex flex-wrap" style={{ marginTop: "10em" }}>
            <figure className="w-50pc h-100vh overflow-hidden">
                <Link onClick={handleProjectClick} to={props.link}>
                    <ScrollTrigger start="top center">
                        <Tween from={{x: 1000, scale: .5}} to={{x: 0, scale: 1}} delay={.5}>
                            <img className="w-100pc h-100vh object-cover" ref={imageRef} alt={props.title} src={props.image} />
                        </Tween>
                    </ScrollTrigger>
                </Link>
            </figure>

            <div ref={textRef} className="w-100pc px-l5 md-w-50pc z-10 text-right flex flex-column justify-between my-8">
                <div>
                    <span className="block overflow-hidden">
                        <h2>
                            <Link onClick={handleProjectClick} to={props.link} style={{ fontSize: "inherit", color: "inherit", fontFamily: "inherit" }}>
                                {props.title}
                            </Link>
                        </h2>
                    </span>

                    <span className="block overflow-hidden">
                        <ScrollTrigger start="-=40% center" >
                            <Tween from={{ y: "100%" }} to={{ y: 0 }}>
                                <p className="w-50pc ml-auto">
                                    {props.shortDesc}
                                </p>
                            </Tween>
                        </ScrollTrigger>
                    </span>
                </div>

                <div>
                    <Link onClick={handleProjectClick} to={props.link} className="details-link">
                        Ver Detalles
                    </Link>
                </div>

                
            </div>
        </div>
    )

}

function Projects() {

    return(
        <div className="relative" style={{marginTop: "10em"}}>
            <ScrollTrigger start="-200px center" end="bottom top" scrub={1}>
                <Tween from={{ x: -90 }} to={{ x: -600 }} >
                        <h2 className="absolute left-0 top-0 opacity-20 z--1 uppercase" style={{fontSize: "6em", whiteSpace: "nowrap" }}>
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                        </h2>
                </Tween>
            </ScrollTrigger>

            <h2 className="text-center uppercase" id="proyectos">Proyectos</h2>

            <div style={{transition: "1s", backgroundColor: "#FFEC06"}} id="full-container" className="fixed-center z-100">

            </div>

            <div style={{ marginTop: "10em", marginBottom: "10em" }}>

                <Project
                    title="Otra Mirada"
                    link="/proyecto/otramirada"
                    image="/images/projects/otramirada/cover.webp"
                    shortDesc="El proyecto Otra Mirada es una galería interactiva que permite ver las imágenes de una fotógrafa de forma dinámica y con una experiencia inmersiva"
                />
                <Project
                    title="Otra Mirada"
                    link="/proyecto/otramirada"
                    image="/images/projects/otramirada/cover.webp"
                    shortDesc="El proyecto Otra Mirada es una galería interactiva que permite ver las imágenes de una fotógrafa de forma dinámica y con una experiencia inmersiva"
                            />

            </div>

        </div>
    )
}

export default Projects;