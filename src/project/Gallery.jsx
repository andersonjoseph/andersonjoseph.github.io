import { Tween, ScrollTrigger } from 'react-gsap';

function Gallery(props) {
  return (
    <>
      <ScrollTrigger start="center center" scrub={.5} pin>
        <Tween from={{ scale: 5 }} to={{ scale: 1 }}>
          <div className="flex flex-wrap">
            <div className="w-33pc">
              <img alt="galeria de proyecto1" className="object-cover" src={props.images[1]} />
              <img alt="galeria de proyecto2" className="object-cover" src={props.images[3]} />
            </div>

            <div className="w-33pc flex-column self-center">
              <img alt="galeria de proyecto3" className="object-cover" src={props.images[0]} />
            </div>

            <div className="w-33pc">
              <img alt="galeria de proyecto4" className="object-cover" src={props.images[2]} />
            </div>
          </div>
        </Tween>
      </ScrollTrigger>

      <video autoPlay muted loop className="mb-l10">
        <source src={props.video} type="video/webm" />
      </video>


    </>
  )
}


export default Gallery;