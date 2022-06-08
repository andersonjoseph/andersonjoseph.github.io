import {useSpring, animated, config} from "@react-spring/web";
import {useMouseStore, useHeroStore} from "../useStore";
import {useCallback} from 'react';

const updateMousePositionSelector = (state) => state.updateMousePosition;
const setIsActiveSelector = (state) => state.setIsActive;

export function Hero() {

  const updateMousePosition = useMouseStore(updateMousePositionSelector);
  const setIsActive = useHeroStore(setIsActiveSelector);

  const titleProps = useSpring({
    delay: 1000,
    from: { y: '10em' },
    to: { y: '0em' }, 
    config: config.slow
  });

  const aboutProps = useSpring({
    delay: 2000,
    from: { y: '10em' },
    to: { y: '0em' }, 
    config: config.slow
  });

  const updateMouseStore = useCallback((ev) => {
    const x = (ev.pageX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth;
    const y = 1.0-(ev.pageY - ev.currentTarget.offsetTop) / ev.currentTarget.offsetHeight;
    updateMousePosition(x,y);
  }, [])

  return (
    <section className='flex flex-col mb-96 relative overflow-hidden' style={{minHeight: '90vh'}}>
      <h1 style={{fontSize: '11.5vw'}} className="font-medium leading-none overflow-hidden">
	<animated.span className='block' style={titleProps}>AndersonJoseph</animated.span>
      </h1>
      <div className='grid grid-cols-3 md:grid-cols-6 justify-items-start'>
	<h2 className='col-start-2 col-span-2 md:col-start-4 md:col-span-2 md:text-4xl font-medium'>
	  WebDeveloper 🡭
	</h2>
      </div>
      <div className='grid grid-cols-6 mt-2 flex-auto'>
	<div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onMouseMove={updateMouseStore} id='hero' className='bg-white opacity-0 absolute top-0 left-0 w-screen h-screen' />
      </div>

      <div className='grid grid-cols-3 md:grid-cols-6 justify-items-start align-items-end text-left px-2 md:px-8 self-end z-10'>
	<div className='col-span-3 md:col-span-2 z-10 overflow-hidden'>
	  <strong>Hola! ✌</strong>
	  <br/>
	  <animated.p style={aboutProps}>
	    I'm a web developer focused on create memorable web apps/sites.
	  </animated.p>
	</div>
	<div className='hidden md:block md:col-start-4 md:col-span-2 md:self-end'>
	  <span className="fixed left-8 bottom-6">🡭</span>
	  <ul className='flex gap-5 fixed bottom-6'>
	    <li><a href="mailto:andersonjoseph@mailfence.com">EMAIL</a></li>
	    <li><a target="_blank" rel="noreferrer" href="https://github.com/andersonjoseph">GITHUB</a></li>
	    <li><a target="_blank" rel="noreferrer" href="https://dev.to/andersonjoseph">BLOG</a></li>
	    <li><a target="_blank" rel="noreferrer"  href="https://twitch.tv/maberilive">TWITCH</a></li>
	  </ul>
	</div>
      </div>
    </section>
  )
}
