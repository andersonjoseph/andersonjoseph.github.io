import { Tween, ScrollTrigger } from 'react-gsap';

function Gallery(props) {
  return (
    <>
      <ScrollTrigger start="top top" scrub={.5} pin>
        <Tween from={{ scale: 2.5 }} to={{ scale: 1 }}>
          <div style={{transformOrigin: "top"}} className="flex flex-wrap h-100vh items-center">

            <div className="w-20pc">
              <img alt="galeria de proyecto1" className="object-cover" src={props.images[1]} />
              <img alt="galeria de proyecto2" className="object-cover" src={props.images[3]} />
            </div>

            <div className="w-60pc flex-column self-center">
              <img alt="galeria de proyecto3" className="object-cover" src={props.images[0]} />
            </div>

            <div className="w-20pc">
              <img alt="galeria de proyecto4" className="object-cover" src={props.images[2]} />
            </div>

          </div>
        </Tween>
      </ScrollTrigger>

      <video autoPlay muted loop className="mb-l5">
        <source src={props.video} type="video/webm" />
      </video>


    </>
  )
}


export default Gallery;