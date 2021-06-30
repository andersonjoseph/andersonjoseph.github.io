import Contact from '../Contact';

import { Tween, ScrollTrigger } from 'react-gsap';

import Hero from "./Hero";
import Gallery from './Gallery';
import CTA from './CTA';

function ProjectPage(props) {

  return (
    <div>
      <Hero technologies={props.data.technologies} cover={props.data.cover} image={props.data.image} />

      <div className="flex mt-l5 h-75vh px-5 md-px-0">
        <div className="md-w-10pc"></div>
        <div className="md-w-40pc">
          <ScrollTrigger start="top center">
            <span className="block overflow-hidden">
              <Tween from={{y: "100%"}} to={{y: 0}}>
                <h2>{props.data.title}</h2>
              </Tween>
            </span>
          </ScrollTrigger>

          <ScrollTrigger start="-=100% center">
            <span className="block overflow-hidden">
              <Tween from={{y: "100%"}} to={{y: 0}} delay={.5}>
                <p>
                  {props.data.desc}
                </p>
              </Tween>
            </span>
          </ScrollTrigger>

          <br/>

          <ScrollTrigger start="-=300% center">
            <span className="block overflow-hidden">
              <Tween from={{y: "100%"}} to={{y: 0}} delay={.5}>
                <a target="_blank" rel="noreferrer" href={props.data.link} className="button">
                  Visitar sitio
                </a>
              </Tween>
            </span>
          </ScrollTrigger>





        </div>
      </div>

      <Gallery images={props.data.images} video={props.data.video} />

      <CTA />

      <Contact />

      <div className="text-center" style={{ marginTop: "10em" }}>
        <small>2021 Anderson Joseph</small>
      </div>
    </div>
  )

}

export default ProjectPage;
