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
      <p style={{fontSize: '.5em', lineHeight: 1.2}}>
	As a seasoned <strong>NodeJS</strong> and <strong>Typescript</strong> developer with over <strong>3 years of experience</strong>, I'm passionate about both coding and community. I've contributed to several <strong>open source projects</strong> and create technical content to help others learn as well. In addition to my development skills, I have experience working with <strong>SaaS products and software agencies</strong>, delivering rock-solid web applications. I specialize in building <strong>APIs</strong> and <strong>microservices</strong>, with a focus on <strong>scalability</strong>and <strong>performance</strong>.
      </p>
    </motion.div>
  )
}
