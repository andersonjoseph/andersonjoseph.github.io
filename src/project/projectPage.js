import { Tween, SplitChars } from 'react-gsap';
import Contact from '../Contact';
import { Link } from 'react-router-dom'

function ProjectPage() {

  return (
    <div>

      <div className="flex flex-wrap h-70vh">

          <div className="hero-title flex flex-wrap w-100pc">
            <div className="w-100pc md-w-10pc"></div>
            <div className="md-w-80pc">

              <div className="mb-l5">
                <Link to="/" className="inline-flex items-center details-link">
                  <img alt="flecha" style={{width: "2em"}} src="images/arrow-right.svg" />
                  <span className="ml-5" style={{fontSize: "2em", color: "inherit"}}>Atrás</span>
                </Link>
              </div>

              <div className="subtitle">
                <Tween from={{ y: -500 }} stagger={0.2}>
                  <SplitChars wrapper={<p className="inline-block" />}>
                    Proyecto
                  </SplitChars>
                </Tween>
              </div>

              <Tween from={{ opacity: 0, y: 50 }} to={{ y: 0, opacity: 1 }} duration={2}>
                <h1>OtraMirada</h1>
              </Tween>

              <ul className="weight-bold mb-5">
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
              </ul>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>

            </div>
          </div>

      </div>

      <Contact />

      <div className="text-center" style={{ marginTop: "10em" }}>
        <small>2021 Anderson Joseph</small>
      </div>
    </div>
  )

}


export default ProjectPage;
