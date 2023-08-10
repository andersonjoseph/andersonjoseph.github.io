import { motion } from 'framer-motion';
import { useState } from "react";

import { Logo } from "./three-app/logo";
import { Background } from "./three-app/background";
import threeApp from './three-app';

import { NavigationButton } from "./components/navigation-button";

import { ProjectsPage } from "./pages/projects";
import { AboutPage } from "./pages/about";
import { ArticlesPage } from "./pages/articles";
import { ContactLink } from './components/contact-link';

threeApp.addObject(new Background());
threeApp.start();

function App() {
  const [inMainPage, setInMainPage] = useState(true);

  const [isProjectsPageShown, setIsProjectsPageShown] = useState(false);
  const [isAboutPageShown, setIsAboutPageShown] = useState(false);
  const [isArticlesPageShown, setIsArticlesPageShown] = useState(false);

  const andersonVariants = {
    center: { y:'0vh' },
    up: { y: "-36vh" },
  }

  const josephVariants = {
    center: { y:'0vh' },
    down: { y: "42vh" },
  }

  function loadLogo(ev) {
    threeApp.addObject(new Logo(ev.target));
  }

  function openProjectsPage() {
    setInMainPage(false);

    setIsProjectsPageShown(true);
  }

  function openMainPage() {
    if(inMainPage) return;

    setInMainPage(true);

    setIsProjectsPageShown(false);
    setIsAboutPageShown(false);
    setIsArticlesPageShown(false);
  }

  function openAboutPage() {
    setInMainPage(false);
    setIsAboutPageShown(true);
  }

  function openArticlesPage() {
    setInMainPage(false);
    setIsArticlesPageShown(true);
  }

  return (
    <main className="h-100pc flex">

      <ProjectsPage isShown={isProjectsPageShown} />
      <AboutPage isShown={isAboutPageShown} />
      <ArticlesPage isShown={isArticlesPageShown} />

      <div className="hidden md-block w-20pc text-center self-center">
	<NavigationButton className="self-center hidden md-inline-block" inMainPage={inMainPage} onClick={openProjectsPage}>projects</NavigationButton>
      </div>

      <div id="logo" className="m-5 md-m-0 md-w-60pc text-center flex flex-column justify-center h-100pc">
	<NavigationButton className="self-center hidden md-inline-block" inMainPage={inMainPage} onClick={openAboutPage} style={{marginBottom: '3em'}}>about me</NavigationButton>
	<div className="flex flex-column justify-center">
	  <motion.img 
	    transition={{
	      duration: 2,
	      ease: [.72,.08,.31,.93],
	      delay: 0.5,
	    }} 
	    variants={andersonVariants} 
	    animate={inMainPage ? 'center' : 'up'}
	    src="./anderson.png" 
	    className="self-center opacity-0 cursor-pointer"
	    onLoad={loadLogo} 
	    onClick={openMainPage}
	  />

	  <motion.img
	    transition={{
	      duration: 2,
	      ease: [.72,.08,.31,.93],
	      delay: 0.5,
	    }} 
	    variants={josephVariants}
	    animate={inMainPage ? 'center' : 'down'}
	    src="./joseph.png" 
	    className="self-center opacity-0 cursor-pointer"
	    onLoad={loadLogo}
	    onClick={openMainPage}
	  />

	</div>

	<ul className="hidden md-flex justify-between">
	  <li className="list-none">
	    <a href="mailto:andersonjoseph@mailfence.com">andersonjoseph@mailfence.com</a>
	  </li>
	  <li className="list-none">
	    <a href="https://twitter.com/ampersandjoseph">twitter.com/ampersandjoseph</a>
	  </li>
	  <li className="list-none">
	    <a href="https://github.com/andersonjoseph">github.com/andersonjoseph</a>
	  </li>
	</ul>

	<div className='flex md-hidden justify-between mt-l5'>
	  <NavigationButton className="self-center" inMainPage={inMainPage} onClick={openProjectsPage}>projects</NavigationButton>
	  <NavigationButton className="self-center" inMainPage={inMainPage} onClick={openAboutPage}>about me</NavigationButton>
	  <NavigationButton className="self-center" inMainPage={inMainPage} onClick={openArticlesPage}>articles</NavigationButton>
	</div>

	<div className='flex md-hidden justify-around mt-l5'>
	  <ContactLink className="w-10pc" href="mailto:andersonjoseph@mailfence.com" inMainPage={inMainPage}>
	    <img src='./email.svg' />
	  </ContactLink>

	  <ContactLink className="w-10pc" href="https://twitter.com/ampersandjoseph" inMainPage={inMainPage}>
	    <img src='./twitter.svg' />
	  </ContactLink>

	  <ContactLink className="w-10pc" href="https://github.com/andersonjoseph" inMainPage={inMainPage}>
	    <img src='./github.svg' />
	  </ContactLink>
	</div>

      </div>

      <div className="hidden md-block w-20pc text-center self-center">
	<NavigationButton className="self-center hidden md-inline-block" inMainPage={inMainPage} onClick={openArticlesPage}>articles</NavigationButton>
      </div>

    </main>
  )
}

export default App
