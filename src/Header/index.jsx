import {useState, useEffect} from 'react';
import {useSpring, animated, config} from "@react-spring/web";

function getTime() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone:'America/Caracas',
    timestyle:'short',
    hourCycle:'h24',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function Header() {
  const separatorProps = useSpring({
    delay: 2000,
    from: { width: '0%' },
    to: { width: '100%' }, 
    config: config.molasses
  });


  let [time, setTime] = useState(getTime());

  useEffect(() => {

    const clock = setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);

    return () => {
      clearInterval(clock);
    }

  }, [])

  return (
    <>
      <header className='grid grid-cols-3 md:grid-cols-6 justify-items-start px-2 md:px-8 py-4 fixed top-0 w-full'>
	<div className='col-span-1 md:col-span-3'>
	  <p>ANDERSON J</p>
	</div>

	<div className='hidden md:block col-span-2 flex justify-center'>
	  <p><span className='bg-green-400 h-2 w-2 inline-block rounded-full mr-2' />AVAILABLE</p>
	</div>
	<div className='col-span-2 md:col-span-1 justify-self-end'>
	  <p>VENEZUELA — {time}</p>
	</div>
      </header>

      <animated.div style={separatorProps} className='w-full bg-white h-px opacity-70 mt-12'/>
    </>
  )
}
