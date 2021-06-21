import { useState, useRef } from 'react';
import { Tween } from 'react-gsap';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Colors(props) {
  const textColorRef = useRef(null);

  const [textColor, setTextColor] = useState("colorcolorcolor");

  function handleCircleHover(ev) {
    setTextColor(ev.target.style.backgroundColor);
  }

  function handleCircleUnHover(ev) {
    setTextColor("color");
  }

	return (
		<div className="mt-l10">
			<h2 className="text-center">Paleta de Colores</h2>

			<div className="mt-l5">
				<ul className="flex flex-wrap justify-center mb-l2">

					<li className="mx-l5 circle-color">
            {
              props.color1.map(
                (color) => <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: color }}></span>
              )
            }
					</li>

					<li className="mx-l5 circle-color">
            {
              props.color2.map(
                (color) => <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: color }}></span>
              )
            }
          </li>

					<li className="mx-l5 circle-color">
            {
              props.color3.map(
                (color) => <span onMouseLeave={handleCircleUnHover} onMouseEnter={handleCircleHover} style={{ display: "block", height: "5em", width: "5em", borderRadius: "50%", backgroundColor: color }}></span>
              )
            }
          </li>

				</ul>

				<Tween to={{ text: textColor }} duration={.5}>
					<h2 className="opacity-50" ref={textColorRef}>COL</h2>
				</Tween>
			</div>

		</div>


	)
}

export default Colors;