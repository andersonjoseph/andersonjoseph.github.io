import { Tween } from 'react-gsap';

function Hero(props) {
  return (
    <div>
      <img alt="portada proyecto" className="w-100vw h-100vh absolute-full opacity-10 object-cover" src={props.cover} />

      <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} delay={3.6}>
        <div className="flex flex-column justify-center h-75vh">
          <h1 className="text-center">
            Otra Mirada
          </h1>
          <ul className="flex justify-center">
            {
              props.technologies.map((tech) => <li className="mx-2 bg-black p-2 br-16">{tech}</li> )
            }
          </ul>
        </div>
      </Tween>

      <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} delay={3.6}>
        <img alt="proyecto imagen 1" className="w-100vw h-100vh object-cover" src={props.image} />
      </Tween>
    </div>
  )
}

export default Hero;