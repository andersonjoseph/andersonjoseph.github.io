import {useMouseStore, useHeroStore} from "../useStore";
import {useCallback} from 'react';

const updateMousePositionSelector = (state) => state.updateMousePosition;
const setIsActiveSelector = (state) => state.setIsActive;

export function Contact() {

  const updateMousePosition = useMouseStore(updateMousePositionSelector);
  const setIsActive = useHeroStore(setIsActiveSelector);

  const updateMouseStore = useCallback((ev) => {
    const x = (ev.pageX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth;
    const y = 1.0-(ev.pageY - ev.currentTarget.offsetTop) / ev.currentTarget.offsetHeight;
    updateMousePosition(x,y);
  }, [])

  return (
    <section>
      <div className='px-3 md:px-0 grid grid-cols-3 md:grid-cols-6 mb-2 md:mb-8'>
	<h2 className='md:col-start-4 md:col-span-2 text-3xl md:text-6xl font-medium text-left flex justify-between'>
	  <a href="mailto:andersonjoseph@mailfence.com">
	    andersonjoseph@<br />
	    mailfence.com
	  </a>
	</h2>
      </div>

      <div className='px-3 md:px-0 py-4 md:py-8 grid md:grid-cols-6 text-left relative'>
	<p className='col-start-4 col-span-2 mb-8'>
	  CURRENTLY I'M LOOKING FOR LONG TERM PROJECTS OR MAYBE JOIN TO AN AWESOME STUDIO/AGENCY/COMPANY. 
	  <br />
	  <br />
	  IF YOU WANT TO WORK TOGETHER OR JUST SAY HI, SEND ME A EMAIL ✌
	</p>

	<div 
	  onMouseEnter={() => setIsActive(true)} 
	  onMouseLeave={() => setIsActive(false)} 
	  onMouseMove={updateMouseStore}  
	  id="footer" 
	  className='absolute w-full h-56 bottom-0' 
	  style={{zIndex: -10}}
	/>

      </div>
    </section>
  )
}

