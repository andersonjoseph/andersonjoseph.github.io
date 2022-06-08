import './App.css';
import {Hero} from './Hero';
import {Projects} from './Projects';
import {Blog} from './Blog';
import {Contact} from './Contact';
import {Header} from './Header';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
	<Hero />
	<Projects />
	<Blog />
	<Contact />
      </main>
    </div>
  );
}

export default App;
