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
                    timeout={3000}
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

function App() {

    return (
        <div className="App p-4 md-px-l5">

            <Router>
                <AnimatedRoute path="/">
                    <IndexPage />
                </AnimatedRoute>

                <AnimatedRoute path="/proyecto">
                    <ProjectPage />
                </AnimatedRoute>
            </Router>

        </div>
    );
}

export default App;
