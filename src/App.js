import './App.css';
import { Tween, Timeline } from 'react-gsap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { useState } from 'react';

import IndexPage from './index/indexPage';
import ProjectPage from './project/projectPage';


function AnimatedRoute(props) {

    return(
        <Route path={props.path} exact>
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={2000}
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

function ExitAnimation() {
    
    return(
        <Timeline 
            target={ 
                <>
                    <div className="absolute right-0 top-0 h-100pc z-10" style={{backgroundColor: "#899878"}} ></div> 
                    <div className="absolute right-0 top-0 h-100pc z-10" style={{backgroundColor: "#121113"}} ></div> 
                </>
            }
        >

            <Tween to={{width: "100%"}} target={0} duration={1}/>
            <Tween to={{width: "100%"}} target={1} position={0.4}/>
            <Tween to={{width: "0", left: 0}} target={0} duration={1} />
            <Tween to={{width: "0", left: 0}} target={1} duration={1}/>
        </Timeline>
    )

}

function App() {

    const [exitAnimation, setExitAnimation] = useState(false);

    function animateExit(node) {
        setTimeout(()=> window.scrollTo(0, 0), 1000);
        setExitAnimation(true);
    }

    function animateEnter(node) {
        setTimeout(()=> setExitAnimation(false), 1000);
    }

    return (
        <div className="App p-4 md-px-l5">

            {
                exitAnimation && <ExitAnimation />
            }

            <Router>
                <AnimatedRoute path="/" onEnter={animateEnter} onExit={animateExit}>
                    <IndexPage />
                </AnimatedRoute>

                <AnimatedRoute path="/proyecto" onEnter={animateEnter} onExit={animateExit}>
                    <ProjectPage />
                </AnimatedRoute>
            </Router>

        </div>
    );
}

export default App;
