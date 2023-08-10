import { motion } from 'framer-motion';

export function AboutPage(props) {
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
      <p>
	I'm a software developer with a passion for writing clean code.
	<br/> 
	I contribute to open source projects and I love sharing my knowledge creating technical content.
      </p>
    </motion.div>
  )
}
