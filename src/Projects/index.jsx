import {useMouseStore, useProjectStore} from "../useStore";
import {useSpring, animated, config} from "@react-spring/web";
import {useState, useCallback} from 'react';
import ScrollTrigger from 'react-scroll-trigger';

function Project({title, description, technologiesLeft, technologiesRight, image, link, id}) {

  const [isActive, setIsActive] = useState(false);

  const contentProps = useSpring({
    to: { 
      height: isActive ? '100%' : '0em', 
      padding: isActive ? '2em' : '0em' ,
    }, 
  });

  function toggleContent() {
    setIsActive((value => !value));
  }

  return(
    <>
      <span id={id} onClick={toggleContent} className='md:col-start-2 col-span-4 h-40 md:h-80 w-full cursor-pointer' />

      <animated.div style={contentProps} className='bg-white md:col-start-1 md:col-span-6 overflow-hidden'>
	<div className='grid grid-cols-2 md:grid-cols-6'>
	  <strong className='text-black col-span-2'>PROJECT: </strong>
	  <p className='text-black md:col-span-1 mb-5'>{title}</p>
	  <div className='col-span-2'>
	    <p className='text-black mb-5'>{description}</p>
	    <strong className='text-black'>Technologies used:</strong>
	    <div className='flex gap-32 mb-5'>
	      <ul className='ml-5 list-disc'>
		{technologiesLeft.map((technology, i) =><li key={`techLeft-${i}`} className="text-black">{technology}</li>) }
	      </ul>
	      <ul className='list-disc'>
		{technologiesRight.map((technology, i) =><li key={`techRight-${i}`} className="text-black">{technology}</li>) }
	      </ul>
	    </div>
	  </div>
	  <div className='md:col-start-4 col-span-3'>
	    <img alt={title} src={image} className="w-full mb-5" />
	    <a className='text-black' href={link} rel='noreferrer' target="_blank">VER EN GITHUB 🡭</a>
	  </div>
	</div>
      </animated.div>
    </>
  )

}

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
	  className='grid md:grid-cols-6'>

	<Project
	  id="project-espera"
	  title="ESPERA"
	  description="A dashboard created to manage waitlists with built in referral"
	  technologiesLeft={['NestJS', 'MongoDB', 'Auth0']}
	  technologiesRight={['TypeScript', 'React', 'TailwindCSS']}
	  image='./espera.webp'
	  link='https://github.com/andersonjoseph/liiive-reviews'
	/>

	<Project
	  id="project-papr"
	  title="PAPR-NEST"
	  description="MongoDB TypeScript-aware Models for NestJS"
	  technologiesLeft={['NestJS', 'MongoDB', 'TypeScript']}
	  technologiesRight={[]}
	  image='./papr.webp'
	  link='https://github.com/andersonjoseph/papr-nest'
	/>

	<Project
	  id="project-liiive"
	  title="LIIIVE REVIEWS"
	  description="Liiive Reviews is an app for writting reviews of Goliiive Shows"
	  technologiesLeft={['NestJS', 'MongoDB', 'TypeScript']}
	  technologiesRight={['PostgreSQL', 'React', 'TailwindCSS']}
	  image='./liiive.webp'
	  link='https://github.com/andersonjoseph/liiive-reviews'
	/>

      </div>

    </ScrollTrigger>
  )
}
