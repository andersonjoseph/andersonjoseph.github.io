import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import IndexPage from './index/indexPage';
import ProjectPage from './project/projectPage';


function AnimatedRoute(props) {

    return(
        <Route path={props.path} exact>
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={3500}
                    onExit={props.onExit}
                    onEntered={props.onEnter}
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
    color1: ['#0C1706', '#000000'],
    color2: ['#56595E', '#F5F3F6'],
    color3: ['#9EEFB1', '#D7F9E0'],
    usersDesc: "Los usuarios objetivos están entre 12 y 30 años. El proyecto está pensado para impactar a creativos, aficionados a la fotografía y turistas que quieran buscar su próximo destino o recordar cuando estuvieron por la ciudad",
    users: [
        {
            name: "Diana Lucia",
            age: "15 años",
            desc: "Estudiante, creativa y fotógrafa amateur. Le interesa compartir sus fotografías y conocer otros fotógrafos cerca de su área",
        },
        {
            name: "Juan Carlos",
            age: "23 años",
            desc: "Estudiante y turista frecuente. Le encanta seguir blogs de fotografía urbana para decidir su próximo destino de viaje",
        },
    ],
    images: ['/images/projects/otramirada/3.webp', '/images/projects/otramirada/2.webp', '/images/projects/otramirada/4.webp', '/images/projects/otramirada/cover.webp' ],
    video: ['/images/projects/otramirada/vid.mp4']
}

function App() {

    return (
        <div className="App p-4 md-px-l5">

            <Router>
                <AnimatedRoute path="/">
                    <IndexPage />
                </AnimatedRoute>

                <AnimatedRoute path="/proyecto/otramirada">
                    <ProjectPage data={otraMiradaData} />
                </AnimatedRoute>
            </Router>

        </div>
    );
}

export default App;
