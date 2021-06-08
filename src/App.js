import './App.css';
import { Tween, Timeline } from 'react-gsap';

import { Route, useLocation, useRoute } from 'wouter';

import {useState, useRef, useEffect} from 'react';

import IndexPage from './index/indexPage';
import ProjectPage from './project/projectPage';

import { Transition } from "react-transition-group";

function ExitTransition(props) {

    return(
        <Timeline
            onComplete={props.onComplete}
            target={
                <div className="page-transition" style={{ backgroundColor: "#222725", height: "100%", width: "0%", position: "absolute", top: 0, right: 0, zIndex: "1" }}></div>
            }
        >
            <Tween to={{ width: "100%" }} duration={.5} />
            <Tween to={{ left: 0, width: "0%" }} duration={.5} />
        </Timeline>
    )
}

function AnimatedRoute(props) {
    const [match, params] = useRoute("/proyecto");

    return (
        <Transition in={match} timeout={1000} onEnter={props.onEnter} unmountOnExit>
            <ProjectPage />
        </Transition>
    )

}

function App() {

    const [exitTransition, setExitTransition] = useState(false);

    function handleEnter() {
        setExitTransition(true);
        console.log("aaaaaaaaaaaaa");
    }

    return (
        <div className="App p-4 md-px-l5">
            {
                exitTransition && (
                    <ExitTransition />
                )
            }

            <Route path="/">
                <IndexPage />
            </Route>

            <Route path="/proyecto">
                <AnimatedRoute onEnter={handleEnter} />
            </Route>
        </div>
    );
}

export default App;
