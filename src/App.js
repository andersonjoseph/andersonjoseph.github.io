import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import IndexPage from './index/indexPage';
import ProjectPage from './project/projectPage';

import { gsap } from 'gsap';
import StandaloneScrollTrigger from 'gsap/ScrollTrigger';
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

function App() {


    function handleExit() {
        console.log('xx');
        StandaloneScrollTrigger.getAll().forEach(t => { console.log(t)});
    }

    function handleEnter() {
        console.log('yy');
        setTimeout(() => StandaloneScrollTrigger.refresh(), 3000)
    }

    return (
        <div className="App p-4 md-px-l5">

            <Router>
                <div className="flex justify-between py-2 sticky z-100">
                    <div>
                        <Link className="underline" to="/">
                            <strong>Andersonweb.dev</strong>
                        </Link>
                    </div>

                    <div>
                        <Link className="mx-5 hover-underline" to="#">Proyectos</Link>
                        <Link className="mx-5 hover-underline" to="#">Sobre Mi</Link>
                        <Link className="ml-5 hover-underline" to="#">Contacto</Link>
                    </div>
                </div>

                <AnimatedRoute onEntered={handleEnter} onExit={handleExit} path="/">
                    <IndexPage />
                </AnimatedRoute>

                <AnimatedRoute onEntered={handleEnter} onExit={handleExit} path="/proyecto/otramirada">
                    <ProjectPage data={otraMiradaData} />
                </AnimatedRoute>
            </Router>

        </div>
    );
}

export default App;
