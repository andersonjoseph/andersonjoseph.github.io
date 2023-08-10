import { motion } from 'framer-motion';

export function ContactLink(props) {
  const variants = {
    appeared: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    dissapeared: { opacity: 0, scale: 0.1, filter: 'blur(50px)' },
  }

  return (
    <motion.a 
      className={props.className}
      href={props.href}
      style={props.style}
      target="_blank"
      transition={{
	ease: [.72,.08,.31,.93],
	duration: 1.5,
      }} 
      variants={variants} 
      animate={props.inMainPage ? 'appeared' : 'dissapeared'}
    >
      {props.children}
    </motion.a>
  )
}
