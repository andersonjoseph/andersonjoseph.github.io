import { motion } from 'framer-motion';

export function ProjectsPage(props) {
  const variants = {
    appeared: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    dissapeared: { opacity: 0, scale: 0.1, filter: 'blur(50px)' },
  }

  return (
    <motion.div
      style={{top: '30%', scale: 0.1, opacity: 0}}
      className="page absolute md-w-60pc"
      transition={{
	ease: [.72,.08,.31,.93],
	duration: 2.5,
      }} 
      animate={props.isShown ? 'appeared' : 'dissapeared'}
      variants={variants}
    >
      <h2 className="block md-inline md-mr-l3">
	<a target="_blank" style={{fontSize: 'inherit'}} href="https://github.com/andersonjoseph/shotbit">
	  <sup className='mr-3' style={{fontSize: '0.5em'}}>001</sup>
	  shotbit</a>
      </h2>
      <h2 className="block md-inline md-mr-l3">
	<a target="_blank" style={{fontSize: 'inherit'}} href="https://www.npmjs.com/package/fastify-hashids">
	  <sup className='mr-3' style={{fontSize: '0.5em'}}>002</sup>
	  fastify-hashids
	</a>
      </h2>

      <br className='hidden md-block' />

      <h2 className="block md-inline md-mr-l3">
	<a target="_blank" style={{fontSize: 'inherit'}} href="https://github.com/andersonjoseph/ossound">
	  <sup className='mr-3' style={{fontSize: '0.5em'}}>003</sup>
	  ossound
	</a>
      </h2>

      <h2 className="block md-inline md-mr-l3 mt-l5 md-mt-0">
	<a target="_blank" style={{fontSize: 'inherit'}} href="https://github.com/andersonjoseph">
	  <sup className='mr-3' style={{fontSize: '0.5em'}}>004</sup>
	  more on github :)
	</a>
      </h2>

    </motion.div>
  )
}
