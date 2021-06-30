import { Tween, ScrollTrigger } from 'react-gsap';

function CTA() {
  return (
    <ScrollTrigger start="top top" end="+=2000" scrub={.5} pin>
      <Tween to={{ x: "-100vw" }}>
        <div className="h-100vh flex">
          <div className="w-100vw h-100pc flex-shrink-0 flex items-center pl-5 md-pl-l7 bg-black">
            <h2 className="w-40pc white">
              ¿Tienes una idea única?
            </h2>
          </div>

          <div className="w-100vw h-100pc bg-white flex-shrink-0 flex items-center pl-5 md-pl-l7">
            <h2 className="w-40pc black">
              Hagamos un website único
            </h2>
          </div>
        </div>
      </Tween>
    </ScrollTrigger>
  )
}


export default CTA;