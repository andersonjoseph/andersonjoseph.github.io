import { motion } from 'framer-motion';

export function NavigationButton (props) {
  const variants = {
    appeared: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    dissapeared: { opacity: 0, scale: 0.1, filter: 'blur(50px)' },
  }

  return (
    <motion.button
      style={props.style}
      className={props.className}
      transition={{
	ease: [.72,.08,.31,.93],
	duration: 1.5,
      }} 
      variants={variants} 
      animate={props.inMainPage ? 'appeared' : 'dissapeared'}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  )
}
