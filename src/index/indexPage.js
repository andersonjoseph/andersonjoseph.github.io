import { Tween, Timeline } from 'react-gsap';

import Hero from './Hero';
import AboutMe from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Contact from '../Contact';


function IndexPage() {

  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <div className="text-center" style={{marginTop: "10em"}}>
          <small>2021 Anderson Joseph</small>
      </div>
    </div>
  )

}


export default IndexPage;
