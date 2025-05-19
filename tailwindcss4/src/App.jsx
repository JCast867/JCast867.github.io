import './App.css'
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import {Projects} from "./components/Projects.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

  return (
      <>
          <Navbar />
          <Intro />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <Footer />
      </>

  );
}

export default App
