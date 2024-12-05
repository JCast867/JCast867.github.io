import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa'; // github icon
import { FaLinkedin } from 'react-icons/fa'; // linkedin icon
import { FaInstagram } from "react-icons/fa"; // instagram icon

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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
              <a href="https://www.instagram.com/jaimee.castaneda/"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              >
                <FaInstagram size={25}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
    <Footer name="Jaime Castaneda" />
    </>
  );
}

export default App;
