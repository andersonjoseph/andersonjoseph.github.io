import Contact from '../Contact';
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import Avatar from "boring-avatars";

import { gsap } from 'gsap';
import { Tween, ScrollTrigger } from 'react-gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function ProjectPage() {

  const textColorRef = useRef(null);

  const [textColor, setTextColor] = useState("colorcolorcolor");

  function handleCircleHover(ev) {
    setTextColor(ev.target.style.backgroundColor);
  }

  function handleCircleUnHover(ev) {
    setTextColor("color");
  }

  return (
    <div>

      <img className="w-100vw h-100vh absolute-full opacity-10" src="https://preview.redd.it/xbmku3trc9571.png?width=640&height=422&crop=smart&auto=webp&s=8c1dce0cf48eb81ea1874c2179888b8e56788b75" />

      <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} delay={3}>
        <div className="flex flex-column justify-center h-75vh">
          <h1 className="text-center">
            Otra Mirada
          </h1>
          <ul className="flex justify-center">
            <li className="mx-2 bg-black p-2 br-16">HTML</li>
            <li className="mx-2 bg-black p-2 br-16">CSS</li>
            <li className="mx-2 bg-black p-2 br-16">JavaScript</li>
            <li className="mx-2 bg-black p-2 br-16">React</li>
            <li className="mx-2 bg-black p-2 br-16">WordPress</li>
            <li className="mx-2 bg-black p-2 br-16">Figma</li>
          </ul>
        </div>
      </Tween>

      <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} delay={3}>
        <img className="w-100vw h-100vh" src="https://preview.redd.it/xbmku3trc9571.png?width=640&height=422&crop=smart&auto=webp&s=8c1dce0cf48eb81ea1874c2179888b8e56788b75" />
      </Tween>

      <div className="flex mt-l5">
        <div className="md-w-10pc"></div>
        <div className="md-w-40pc">
          <h2>Otra Mirada</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

      <div className="mt-l10">
        <h2 className="text-center">Paleta de Colores</h2>

        <div className="mt-l5">
          <ul className="flex justify-center mb-l2">

            <li className="mx-l5 circle-color">
              <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "red" }}></span>
              <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "yellow" }}></span>
              <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "blue" }}></span>
            </li>

            <li className="mx-l5 circle-color">
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "red" }}></span>
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "yellow" }}></span>
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "blue" }}></span>
            </li>

            <li className="mx-l5 circle-color">
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "red" }}></span>
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "yellow" }}></span>
              <span style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: "blue" }}></span>
            </li>

          </ul>

          <Tween to={{ text: textColor }} duration={.5}>
            <h2 className="opacity-50" ref={textColorRef}>COL</h2>
          </Tween>
        </div>

      </div>

      <div className="mt-l10">


          <div className="flex">

          <ScrollTrigger start="center center" end="+=1000" pin>
            <div className="w-100pc md-w-50pc">
              <Tween>
                <div>
                  <h2>Usuarios</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </Tween>
            </div>
          </ScrollTrigger>

            <div className="w-100pc md-w-10pc"></div>

          <ScrollTrigger start="center center" end="+=500" scrub={0.5} pin>
            <div className="w-100pc md-w-40pc text-center">
              <Tween to={{ opacity: 0, y: -50 }}>
                <div>
                  <figure className="block text-center mb-5">
                    <Avatar
                      size="10em"
                      name="Diana Lucia"
                      variant="beam"
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />;
                  </figure>

                  <h3>Diana Lucia - 15 Años </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </Tween>
              <Tween to={{ opacity: 0, y: -50 }}>
                <div>
                  <figure className="block text-center mb-5">
                    <Avatar
                      size="10em"
                      name="Diana Lucia"
                      variant="beam"
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />;
                  </figure>

                  <h3>Diana Lucia - 15 Años </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </Tween>


            </div>
          </ScrollTrigger>


          </div>

      </div>

      <ScrollTrigger start="center center" scrub={.5} pin>
          <Tween from={{ scale: 5 }} to={{ scale: 1 }}>
            <div className="flex flex-wrap">
              <div className="w-33pc">
                <img className="" src="https://images.pexels.com/photos/6770410/pexels-photo-6770410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <img className="" src="https://images.pexels.com/photos/7494074/pexels-photo-7494074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>

              <div className="w-33pc flex-column self-center">
                <img className="" src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>

              <div className="w-33pc">
                <img className="" src="https://images.pexels.com/photos/7675842/pexels-photo-7675842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
            </div>
          </Tween>
      </ScrollTrigger>

      <img className="block m-auto mt-5" src="https://images.pexels.com/photos/6963050/pexels-photo-6963050.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />

      <div style={{marginLeft: "-7em", marginRight: "-7em"}} className="h-100vh bg-white pr-l10">
        <h2 className="w-30pc black">
          Quieres una página web que impresione a tus clientes?
        </h2>

      </div>

      <Contact />

      <div className="text-center" style={{ marginTop: "10em" }}>
        <small>2021 Anderson Joseph</small>
      </div>
    </div>
  )

}


export default ProjectPage;
