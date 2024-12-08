import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "./me.jpg"; // pic of me
import { FaGithub } from 'react-icons/fa'; // github icon
import { FaLinkedin } from 'react-icons/fa'; // linkedin icon
import { SiLeetcode } from "react-icons/si"; // leetcode icon
import { FaPython } from "react-icons/fa"; // python icon
import { SiDjango } from "react-icons/si"; // django icon
import { FaHtml5 } from "react-icons/fa"; // html icon
import { FaBootstrap } from "react-icons/fa"; // bootstrap icon
import { FaDocker } from "react-icons/fa"; // docker icon
import { FaJava } from "react-icons/fa"; // java icon
import { SiC } from 'react-icons/si'; // c icon
import { SiJavascript } from "react-icons/si"; // javascript icon
import { TbSql } from "react-icons/tb"; // sql icon
import { DiScala } from "react-icons/di"; // scala icon
import { SiR } from "react-icons/si"; // r icon
import sasLogo from "./sas.png"; // SAS icon
import { FaCss3Alt } from "react-icons/fa"; // css icon
import { FaReact } from "react-icons/fa"; // react icon
import { FaGitAlt } from "react-icons/fa"; // git icon
import { SiIntellijidea } from "react-icons/si"; // intellij icon
import { SiPycharm } from "react-icons/si"; // pycharm icon
import { VscVscodeInsiders } from "react-icons/vsc"; // vscode icon
import { BiLogoPostgresql } from "react-icons/bi"; // postgresql icon
import { SiOracle } from "react-icons/si"; // oracle icon
import { SiRstudioide } from "react-icons/si"; // rstudio icon
import { SiPostman } from "react-icons/si"; // postman icon
import { FaAws } from "react-icons/fa"; // aws icon
import { SiUipath } from "react-icons/si"; // uipath icon


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        {/* Brand Name */}
        <a className="navbar-brand" href="#home">
          {props.name}
        </a>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Social Icons */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Left-aligned Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#education" className="nav-link">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>
          </ul>

          {/* Right-aligned Social Icons */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="https://github.com/JCast867"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/jaimecast03/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://leetcode.com/u/JaimeCast/"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              >
                <SiLeetcode size={25}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Intro() {
  return (
    <div className="container mt-5" id="home">
      <div className="mb-4">
        <div className="card-body d-flex align-items-center">
          <div className="me-3">
            <img 
              src={pic} 
              alt="Me" 
              className="rounded-circle" 
              width="165" 
              height="175"
            />
          </div>
          <div>
            <h2 className="mb-1">Hey, I'm Jaime Castaneda</h2>
            <p className="lead mt-3">
              I'm a computer science student at DePaul University. In my free 
              time, I like to go to the gym, hang out with my girlfriend, watch
              movies and shows, and eat. My favorite show and restaurant currently are American Horror Story and Panda Express.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body text-center">
              <h6 className="text-center mb-0">Full-Stack Finance Tracking Web Application</h6>
              <p className="text-center mb-0">A finance tracking App</p>
            </div>
            <div className="card-footer"><FaPython size="15" /> <SiDjango size="15" /> 
            <FaHtml5 size="15" /> <FaBootstrap size="15" /> <FaDocker size="15" /></div>
          </div>
        </div>
        <div className="col-lg-4">Hi</div>
        <div className="col-lg-4">Hi</div>
        <div className="col-lg-4">Hi</div>
        <div className="col-lg-4">Hi</div>

      </div>
    </div>
  )
}


function Skills() {
  return (
    <div className="container" id="skills">
      <h2 className="text-center mb-4">Skills and Tools</h2>

      <div className="row">
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaPython size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Python</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaJava size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Java</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiC size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>C</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiJavascript size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>JavaScript</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiR size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>R</strong></h6>
                <p className="mb-2">Programming/Scripting Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <DiScala size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Scala</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <img src={sasLogo} alt="SAS logo" width="40" height="40" />
              </div>
              <div>
                <h6 className="mb-0"><strong>SAS</strong></h6>
                <p className="mb-2">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <TbSql size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>SQL</strong></h6>
                <p className="mb-2">Query Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaHtml5 size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>HTML</strong></h6>
                <p className="mb-2">Markup Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaCss3Alt size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>CSS</strong></h6>
                <p className="mb-2">Stylesheet Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiDjango size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Django</strong></h6>
                <p className="mb-2">Python Framework</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaBootstrap size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Bootstrap</strong></h6>
                <p className="mb-2">CSS Framework</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaReact size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>React</strong></h6>
                <p className="mb-2">JavaScript Library</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaGitAlt size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Git</strong></h6>
                <p className="mb-2">Version Control</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiIntellijidea size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>IntelliJ</strong></h6>
                <p className="mb-2">Java IDE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiPycharm size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Pycharm</strong></h6>
                <p className="mb-2">Python IDE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <VscVscodeInsiders size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>VS Code</strong></h6>
                <p className="mb-2">Code Editor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiRstudioide size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>R Studio</strong></h6>
                <p className="mb-2">R IDE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <BiLogoPostgresql size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>PostgreSQL</strong></h6>
                <p className="mb-2">Relational Database</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiOracle size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Oracle</strong></h6>
                <p className="mb-2">Relational Database</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaDocker size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Docker</strong></h6>
                <p className="mb-2">Container Application Development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiPostman size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Postman</strong></h6>
                <p className="mb-2">API Testing and Development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaAws size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>AWS</strong></h6>
                <p className="mb-2">Cloud Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiUipath size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>UiPath</strong></h6>
                <p className="mb-2">Robotic Process Automation (RPA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          © {props.name} | All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
    <Navbar name="Jaime Castaneda"/>
    <Intro />
    <Projects />
    <Skills />
    <Footer name="Jaime Castaneda" />
    </>
  );
}

export default App;
