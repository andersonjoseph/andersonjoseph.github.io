import Contact from '../Contact';
import { useEffect } from 'react';

import { gsap } from 'gsap';
import StandaloneScrollTrigger from 'gsap/ScrollTrigger';

import Hero from "./Hero";
import Colors from "./Colors";
import Users from "./Users";
import Gallery from './Gallery';
import CTA from './CTA';

gsap.registerPlugin(StandaloneScrollTrigger);

function ProjectPage(props) {

    useEffect(() => {
        setTimeout(() => StandaloneScrollTrigger.refresh(), 1000)
    })

  return (
    <div>
      <Hero technologies={props.data.technologies} cover={props.data.cover} image={props.data.image} />

      <div className="flex mt-l5">
        <div className="md-w-10pc"></div>
        <div className="md-w-40pc">
          <h2>{props.data.title}</h2>
          <p>
            {props.data.desc}
          </p>
        </div>
      </div>

      <Colors color1={props.data.color1} color2={props.data.color2}  color3={props.data.color3}  />

      <Users desc={props.data.usersDesc} users={props.data.users} />

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
