import {useMouseStore, useProjectStore} from "../useStore";
import {useSpring, animated, config} from "@react-spring/web";
import {useCallback} from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const updateMousePositionSelector = (state) => state.updateMousePosition;
const setIsActiveSelector = (state) => state.setIsActive;

export function Projects() {

  const updateMousePosition = useMouseStore(updateMousePositionSelector);
  const setIsActive = useProjectStore(setIsActiveSelector);

  const [titleProps, projectSpringApi] = useSpring(() => ({}));

  function updateMouseStore(ev) {
    const x = (ev.pageX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth;
    const y = 1.0-(ev.pageY - ev.currentTarget.offsetTop) / ev.currentTarget.offsetHeight;
    updateMousePosition(x,y);
  }

  const showTitle = useCallback(() => {
    projectSpringApi.start({
      from: { y: '10em' },
      to: { y: '0em' }, 
      config: config.slow
    });
  }, [])

  const hideTitle = useCallback(() => {
    projectSpringApi.start({
      to: { y: '10em' }, 
      config: config.slow
    });
  }, [])

  return (
    <ScrollTrigger component='section' triggerOnLoad={false} onExit={hideTitle} onEnter={showTitle} className='mb-96'>

      <div className='grid md:grid-cols-6'>
	<h2 className='md:col-start-2 col-span-4 px-3 md:p-0 text-5xl md:text-8xl font-medium text-left flex justify-between items-end overflow-hidden mb-10'>
	  <animated.span style={titleProps} >PROJECTS</animated.span>
	  <animated.span style={titleProps} >🡯</animated.span>
	</h2>
      </div>

      <div 
	onMouseEnter={() => setIsActive(true)} 
	onMouseLeave={() => setIsActive(false)} 
	onMouseMove={updateMouseStore} 
	className='grid md:grid-cols-6 md:gap-2 gap-6 px-3 md:p-0'>

	<a target='_blank' rel='noreferrer' href="https://github.com/andersonjoseph/espera" id='project-espera' 
	  className='h-40 md:col-start-2 col-span-2 md:h-80 w-full cursor-pointer border-2 p-3 flex flex-col justify-between'>
	  <h3>ESPERA-WAITLIST</h3>
	  <div>
	    <small>#001</small>
	    <br/>
	    <small>Internal dashboard to manage waitlist with built in referral system</small>
	  </div>
	</a>

	<a target='_blank' rel='noreferrer' href='https://github.com/andersonjoseph/papr-nest' id='project-papr' 
	  className='h-40 md:col-start-4 col-span-2 md:h-80 w-full cursor-pointer border-2 p-3 flex flex-col justify-between'>
	  <h3>PAPR=NEST</h3>
	  <div>
	    <small>#002</small>
	    <br/>
	    <small>MongoDB TypeScript-aware Models for NestJS</small>
	  </div>
	</a>

	<a target='_blank' rel='noreferrer' href='https://github.com/andersonjoseph/liiive-reviews-front' id='project-liiive' 
	  className='h-40 md:col-start-2 col-span-2 md:h-80 w-full cursor-pointer border-2 p-3 flex flex-col justify-between'>
	  <h3>LIIIVE REVIEWS</h3>
	  <div>
	    <small>#003</small>
	    <br/>
	    <small>Liiive Reviews is an app for writting reviews of Goliiive Shows</small>
	  </div>
	</a>


	<div className='h-40 md:col-start-4 col-span-2 md:h-80 w-full cursor-pointer border-2 p-3 flex items-end'>
	  <a href='https://github.com/andersonjoseph' target='_blank' rel='noreferrer' className="md:text-6xl font-medium">See More on Github 🡭</a>
	</div>
      </div>

    </ScrollTrigger>
  )
}
