import { Tween, ScrollTrigger } from 'react-gsap';
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import BlurryTilt from "../BlurryTilit";
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

        tl.to(textRef.current, {
            x: '2000',
            duration: 1,
            ease: "back.in",
            onComplete: animateImage
        });

    }

    return(
        <div className="flex flex-wrap" style={{ marginTop: "10em" }}>
            {
                props.offset
                &&
                <div className="w-100pc md-w-10pc"></div> 
            }

            <figure className="w-40pc">

                <Link onClick={handleProjectClick} to="/proyecto">
                    <img className="w-100pc h-100pc" ref={imageRef} onClick={handleProjectClick} alt={props.title} src={props.image} />
                </Link>
            </figure>

            <div ref={textRef} className="w-100pc md-w-50pc z-10">

                <h2 className="mb-l2">
                    <Link onClick={handleProjectClick} to="/proyecto" style={{fontSize: "inherit", color: "inherit", fontFamily: "inherit"}}>
                        {props.title}
                    </Link>
                </h2>

                <Link onClick={handleProjectClick} to="/proyecto" className="details-link">
                    Ver Detalles
                </Link>

            </div>
        </div>
    )

}

function Projects() {

    return(
        <div className="relative" style={{marginTop: "10em"}}>
            <ScrollTrigger start="-200px center" end="bottom top" scrub={1}>
                <Tween from={{ x: -90 }} to={{ x: -600 }} >
                        <h2 className="absolute left-0 top-0 opacity-10 z--1" style={{fontSize: "6em", whiteSpace: "nowrap" }}>
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                            Proyectos -
                        </h2>
                </Tween>
            </ScrollTrigger>

            <h2 className="text-center">Proyectos</h2>

            <div style={{transition: "1s", backgroundColor: "#161517"}} id="full-container" className="fixed-center">

            </div>

            <div style={{ marginTop: "10em", marginBottom: "10em" }}>

                <ScrollTrigger start="-200px center" end="center center" scrub={1}>
                    <Tween from={{x: -500, opacity: 0}} to={{x:0, opacity: 1}}>
                        <div>
                            <Project title="Otra Mirada" link="#" image="https://preview.redd.it/xbmku3trc9571.png?width=640&height=422&crop=smart&auto=webp&s=8c1dce0cf48eb81ea1874c2179888b8e56788b75" />
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