import './App.css';

import { Route } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import IndexPage from './index/indexPage';
import ProjectPage from './project/projectPage';
import Header from './Header';

import { gsap } from 'gsap';
import StandaloneScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useState, useRef } from 'react';
gsap.registerPlugin(StandaloneScrollTrigger);

function AnimatedRoute(props) {

    return(
        <Route path={props.path} exact>
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={3500}
                    onExit={props.onExit}
                    onEntered={props.onEntered}
                    unmountOnExit
                >
                    {props.children}
                </CSSTransition>

            )}
        </Route>
    )
}

const otraMiradaData = {
    cover: "/images/projects/otramirada/cover.webp",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress' ,'Figma'],
    image: ['/images/projects/otramirada/1.webp'],
    title: "Otra Mirada",
    desc: "El proyecto Otra Mirada es una galería interactiva que permite ver las imágenes de una fotógrafa de forma dinámica y con una experiencia inmersiva. Está construida con tecnologías modernas y corre sobre WordPress para facilitar la administración y la subida de archivos",
    images: ['/images/projects/otramirada/3.webp', '/images/projects/otramirada/2.webp', '/images/projects/otramirada/4.webp', '/images/projects/otramirada/cover.webp' ],
    video: ['/images/projects/otramirada/vid.mp4']
}

function HomeAnimation(props) {

    const animationRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(animationRef.current, {
            width: '100%',
            duration: 1
        });

        tl.to(animationRef.current.querySelector("div"), {
            width: '100%',
            duration: 1
        }, "-=0.5");

        tl.to(animationRef.current, {
            width: '0',
            left: 'initial',
            duration: .5,
            onComplete: props.onComplete
        }, "+=2.5");

    }, [props.showAnimation, props.onComplete])

    return (
        <div ref={animationRef} style={{width: 0}} className="fixed-full bg-black z-100">
            <div style={{ width: 0, backgroundColor: "#998c00" }} className="absolute-full">
            </div>
        </div>
    )
}

function App() {

    const [showHomeAnimation, setShowHomeAnimation] = useState(false);

    function homeTransition() {
        setShowHomeAnimation(true);
    }

    return (
        <div className="App">

            {
                showHomeAnimation && ( <HomeAnimation showAnimation={showHomeAnimation} onComplete={()=> setShowHomeAnimation(false) } /> )
            }

            <Header homeTransition={homeTransition} />

            <AnimatedRoute path="/" exact>
                <IndexPage />
            </AnimatedRoute>

            <AnimatedRoute path="/proyecto/otramirada" exact>
                <ProjectPage data={otraMiradaData} />
            </AnimatedRoute>
        </div>
    );
}

export default App;
