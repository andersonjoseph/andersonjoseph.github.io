import { useEffect } from 'react';

import Hero from './Hero';
import AboutMe from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Contact from '../Contact';

import { gsap } from 'gsap';
import StandaloneScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(StandaloneScrollTrigger);

function IndexPage() {

    useEffect(() => {
        setTimeout(() => StandaloneScrollTrigger.refresh(), 5000)
    })

  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </div>
  )

}


export default IndexPage;
