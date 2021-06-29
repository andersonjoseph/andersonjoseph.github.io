import { Tween, ScrollTrigger } from 'react-gsap';

function CTA() {
  return (
    <ScrollTrigger start="top top" end="+=2000" scrub={.5} pin>
      <Tween to={{ x: "-100vw" }}>
        <div style={{ marginLeft: "-7em", marginRight: "-7em" }} className="h-100vh flex">
          <div style={{ backgroundColor: "#222725" }} className="w-100vw h-100pc flex-shrink-0 flex items-center pl-l7">
            <h2 className="w-40pc white">
              ¿Quieres un sitio web que te destaque de la competencia?
            </h2>
          </div>

          <div className="w-100vw h-100pc bg-white flex-shrink-0 flex items-center pl-l7">
            <h2 className="w-40pc black">
              ¿Quieres un sitio web que impresione a tus clientes?
            </h2>
          </div>
        </div>
      </Tween>
    </ScrollTrigger>
  )
}


export default CTA;