import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
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
import { BsBank2 } from "react-icons/bs"; // bank icon
import { RiTodoFill } from "react-icons/ri"; // todo icon
import { AiOutlineStock } from "react-icons/ai"; // stock icon
import { FaBasketball } from "react-icons/fa6"; // basketball icon
import { BiMoviePlay } from "react-icons/bi"; // movie icon
import { IoMdChatbubbles } from "react-icons/io"; // chat icon
import { FaGraduationCap } from "react-icons/fa"; // graduation cap icon
import { FaTrophy } from "react-icons/fa"; // trophy icon
import { TbBrandWalmart } from "react-icons/tb"; // walmart icon
import { SiSelenium } from "react-icons/si"; // selenium icon
import { SiJunit5 } from "react-icons/si"; // junit icon
import { SiJira } from "react-icons/si"; // jira logo


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
              <a href="#projects" className="nav-link">
                Projects
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
            <p className="lead mt-3" id="education">
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

function Education() {
  return (
    <div className="container" >
      <h2 className="text-center mb-4">Education</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="text-center mb-3"><FaGraduationCap size={25} /><strong> Current Program</strong></div>
                <h6 className="text-center mb-3">Bachelor of Science in Computer Science | Minor in Data Science</h6>
                <h6 className="text-center mb-3">Concentration: Software Development | Expected Graduation: <u>03/2025</u></h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="text-center mb-3"><FaTrophy size={25} /> <strong>GPA and Achievements</strong></div>
                <h6 className="text-center mb-2">GPA: <u>3.48</u>/4.00</h6>
                <h6 className="text-center mb-4">3-time Dean's List Student</h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export function RelevantCoursework() {
  const [index, setIndex] = useState(0);

  const courses = [
  {
    name: "Intro to Computer Science I/II",
    points: [
      "Programming",
      "Python",
      "Recursion",
      "Object-Oriented Software",
      "Webscraping"
    ]
  },
  {
    name: "Sophomore Lab in Applied Computing",
    points: [
      "Problem Solving",
      "Java",
      "Kotlin",
      "AI/ML",
      "Debugging"
    ]
  },
  {
    name: "Data Structures I/II",
    points: [
      "Java",
      "Trees",
      "Linked Lists",
      "Stacks",
      "Queues"
    ]
  },
  {
    name: "Design and Analysis of Algorithms",
    points: [
      "Run-time Analysis",
      "Divide and Conquer",
      "Dynamic Programming",
      "Basic Graph Algorithm",
      "Greedy Algorithms"
    ]
  },
  {
    name: "Automata Theory",
    points: [
      "Deteministic Finite Automata",
      "Nondeteministic Finite Automata",
      "Context-Free Language",
      "Deterministic Context-Free Language",
      "Push-Down Automata"
    ]
  },
  {
    name: "Concepts of Programming Languages",
    points: [
      "Scala",
      "Functional Programming",
      "Closures",
      "Inheritance",
      "Dynamic Dispatch"
    ]
  },
  {
    name: "Database Systems",
    points: [
      "SQL",
      "Oracle SQL Developer",
      "Queries",
      "Data Models",
      "Database Schemas"
    ]
  },
  {
    name: "Computer Systems I/II",
    points: [
      "C",
      "Network Programming",
      "Concurrent Programming",
      "Caching",
      "Virtual Memory"
    ]
  },
  {
    name: "Distributed Systems",
    points: [
      "Python",
      "Socket Programming",
      "Multithreading",
      "Networking Protocols",
      "Local Networks"
    ]
  },
  {
    name: "Foundations of Artificial Intelligence",
    points: [
      "Python",
      "Search Algorithms",
      "Propositional and First Order Logic",
      "Markov Decision Process",
      "Machine Learning"
    ]
  },
  {
    name: "Software Projects",
    points: [
      "Python",
      "Django",
      "Group Projects",
      "Git and Github",
      "PostgreSQL"
    ]
  },
  {
    name: "Data Analysis",
    points: [
      "R",
      "Data Visualization",
      "Data Collection",
      "Confidence Intervals",
      "Hypothesis Testing"
    ]
  },
  {
    name: "Software Testing",
    points: [
      "Java",
      "Junit",
      "Jira",
      "Testing Techniques",
      "Selenium IDE"
    ]
  },
  {
    name: "Object-Oriented Software Development",
    points: [
      "Java",
      "Object-Oriented Principles",
      "Object-Oriented Foundations",
      "Exception Handling",
      "Design Patterns"
    ]
  },
  {
    name: "Data Analysis & Regression",
    points: [
      "SAS",
      "Linear Regression",
      "Polynomial Regression Model",
      "Logistic Regression",
      "Model Validation"
    ]
  }
  ];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setIndex((prevIndex) => 
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1);
  };

  React.useEffect(() => {
    const slideInterval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="container">
      <h3 className="text-center mb-4">Relevant Coursework</h3>
      <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <div className="carousel-wrapper mb-4">
        <div id="courseCarousel" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {courses.map((course, idx) => (
              <div
                className={`carousel-item ${idx === index ? 'active' : ''}`}
                key={idx}
                style={{
                  transition: 'opacity 0.6s ease-in-out', // Custom transition
                  opacity: idx === index ? 1 : 0
                }}
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ 
                    height: '300px',
                    transform: idx === index ? 'translateX(0)' : 'translateX(50px)', // Sliding effect
                    transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
                   }}
                >
                  <h6 className="mb-3"><strong>{course.name}</strong></h6>
                  <ul className="text-start" style={{ maxWidth: '283px' }}>
                    {course.points.map((point, pIdx) => (
                      <li 
                      key={pIdx}
                      style={{
                        opacity: idx === index ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out',
                        transitionDelay: `${pIdx * 0.1}s` // Staggered animation for list items
                      }}
                      >
                      {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide="prev"
            onClick={handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide="next"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden" id="projects">Next</span>
          </button>
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
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>Full-Stack Finance Tracking Web Application</strong></h6>
              <div className="text-center mb-3"><BsBank2 size={50} /> </div>
              <p className="text-center mb-3">A full-stack finance tracking application that was developed in a group
                of 5 for our senior capstone class that got an 100%.
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">Python</span>
                <span className="skill-badge me-2 mb-0">Django</span>
                <span className="skill-badge me-2 mb-0">Bootstrap</span>
                <span className="skill-badge me-2 mb-0">Docker</span>
                <span className="skill-badge me-2 mb-0">Git</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>Todo Full-Stack Web Application</strong></h6>
              <div className="text-center mb-3"><RiTodoFill size={50} /> </div>
              <p className="text-center mb-3">A full-stack todo list application designed to track tasks 
                that was developed in a group of 5 for our senior capstone class that got an 100%.
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">Python</span>
                <span className="skill-badge me-2 mb-0">Django</span>
                <span className="skill-badge me-2 mb-0">Bootstrap</span>
                <span className="skill-badge me-2 mb-0">Docker</span>
                <span className="skill-badge me-2 mb-0">Git</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>Stock Trading System</strong></h6>
              <div className="text-center mb-3"><AiOutlineStock size={50} /> </div>
              <p className="text-center mb-3">Designed a stock trading system using object-oriented
                programming using design patterns like factory, flyweight, singleton, facade, and factory. 
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">Java</span>
                <span className="skill-badge me-2 mb-0">OOP</span>
                <span className="skill-badge me-2 mb-0">GUI</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>NBA Points Analysis</strong></h6>
              <div className="text-center mb-3"><FaBasketball size={50} /> </div>
              <p className="text-center mb-3">Developed a model to accurately predict the points 
                per game for NBA players. Conducted data exploration, data analysis, testing, and predictions.
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">SAS</span>
                <span className="skill-badge me-2 mb-0">Linear Regression</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>Automated Movie Rating Bot</strong></h6>
              <div className="text-center mb-3"><BiMoviePlay size={50} /> </div>
              <p className="text-center mb-3">Collaborated with the <i>Protiviti</i> team to design and
              implement an automated bot to extract movie ratings from an Excel file.
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">UiPath</span>
                <span className="skill-badge me-2 mb-0">Excel</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h6 className="text-center mb-1"><strong>Enhanced Chat System with File Transfers</strong></h6>
              <div className="text-center mb-3"><IoMdChatbubbles size={50} /> </div>
              <p className="text-center mb-3">Developed a client-server chat application enabling real-time 
                messaging and secure binary file transfers between multiple clients.
              </p>
              <div className="text-center d-flex flex-wrap justify-content-center align-items-center mb-1">
                <span className="skill-badge me-2 mb-0">Socket Programming</span>
                <span className="skill-badge me-2 mb-0">Python</span>
                <span className="skill-badge me-2 mb-0" id="skills">Multithreading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Skills() {
  return (
    <div className="container" >
      <h2 className="text-center mb-4">Skills and Tools</h2>

      <div className="row">
        <div className="col-sm-4">
          <div className="card mb-4 skill-card python-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaPython size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Python</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2022</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card java-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaJava size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Java</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: March 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card c-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiC size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>C</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: September 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card js-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiJavascript size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>JavaScript</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: August 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card r-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiR size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>R</strong></h6>
                <p className="mb-0">Programming/Scripting Language</p>
                <p className="text-muted mb-0"><small>Started: March 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card scala-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <DiScala size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>Scala</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: January 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <img src={sasLogo} alt="SAS logo" width="40" height="40" className="sas-png" />
              </div>
              <div>
                <h6 className="mb-0"><strong>SAS</strong></h6>
                <p className="mb-0">Programming Language</p>
                <p className="text-muted mb-0"><small>Started: March 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card sql-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <TbSql size={50} />
              </div>
              <div>
                <h6 className="mb-0"><strong>SQL</strong></h6>
                <p className="mb-0">Query Language</p>
                <p className="text-muted mb-0"><small>Started: January 2025</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card html-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaHtml5 size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>HTML</strong></h6>
                <p className="mb-0">Markup Language</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card css-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaCss3Alt size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>CSS</strong></h6>
                <p className="mb-0">Stylesheet Language</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card django-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiDjango size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Django</strong></h6>
                <p className="mb-0">Python Framework</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card bootstrap-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaBootstrap size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Bootstrap</strong></h6>
                <p className="mb-0">CSS Framework</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card react-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaReact size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>React</strong></h6>
                <p className="mb-0">JavaScript Library</p>
                <p className="text-muted mb-0"><small>Started: November 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card git-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaGitAlt size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Git</strong></h6>
                <p className="mb-0">Version Control</p>
                <p className="text-muted mb-0"><small>Started: August 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card jetbrains-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiIntellijidea size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>IntelliJ</strong></h6>
                <p className="mb-0">Java IDE</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card jetbrains-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiPycharm size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Pycharm</strong></h6>
                <p className="mb-0">Python IDE</p>
                <p className="text-muted mb-0"><small>Started: February 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card vs-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <VscVscodeInsiders size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>VS Code</strong></h6>
                <p className="mb-0">Code Editor</p>
                <p className="text-muted mb-0"><small>Started: Novemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card rstudio">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiRstudioide size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>R Studio</strong></h6>
                <p className="mb-0">R IDE</p>
                <p className="text-muted mb-0"><small>Started: March 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card postgresql-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <BiLogoPostgresql size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>PostgreSQL</strong></h6>
                <p className="mb-0">Relational Database</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card oracle-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiOracle size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Oracle</strong></h6>
                <p className="mb-0">Relational Database</p>
                <p className="text-muted mb-0"><small>Started: January 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card docker-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaDocker size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Docker</strong></h6>
                <p className="mb-0">Container Application Development</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card postman-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiPostman size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Postman</strong></h6>
                <p className="mb-0">API Testing and Development</p>
                <p className="text-muted mb-0"><small>Started: October 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card aws-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaAws size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>AWS</strong></h6>
                <p className="mb-0">Cloud Service</p>
                <p className="text-muted mb-0"><small>Started: Septemeber 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card uipath-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiUipath size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>UiPath</strong></h6>
                <p className="mb-0">Robotic Process Automation (RPA)</p>
                <p className="text-muted mb-0"><small>Started: January 2023</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card jira-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiJira size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Jira</strong></h6>
                <p className="mb-0">Project Management</p>
                <p className="text-muted mb-0"><small>Started: January 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card junit-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiJunit5 size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>JUnit</strong></h6>
                <p className="mb-0">Test Automation Framework</p>
                <p className="text-muted mb-0"><small>Started: January 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4 skill-card selenium-icon">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <SiSelenium size={50}/>
              </div>
              <div>
                <h6 className="mb-0"><strong>Selenium</strong></h6>
                <p className="mb-0">Automated Testing Tool</p>
                <p className="text-muted mb-0"><small>Started: January 2024</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="container d-flex flex-column align-items-center py-5" id="experience">
      <h2 className="text-center mb-4">Experience</h2>

      <div className="card col-lg-6 col-md-8 col-sm-10 border-1 mb-4 icon-container walmart-icon skill-card">
        <div className="card-body d-flex align-items-center">
          <div className="me-4">
            <TbBrandWalmart size={55} />
          </div>

          <div>
            <p className="text-muted mb-1 small">October 2021 - Present | Part-Time</p>
            <h6 className="mb-1 fw-bold">Walmart</h6>
            <p className="mb-0 text-muted">Replenishment Associate</p>
          </div>
        </div>
      </div>

      <div className="card col-lg-6 col-md-8 col-sm-10 border-1 mb-4 icon-container walmart-icon skill-card">
        <div className="card-body d-flex align-items-center">
          <div className="me-4 icon-container walmart-icon">
            <TbBrandWalmart size={55} />
          </div>

          <div>
            <p className="text-muted mb-1 small">December 2019 - July 2021 | Part-Time</p>
            <h6 className="mb-1 fw-bold">Walmart</h6>
            <p className="mb-0 text-muted">Cart Attendant</p>
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
    <Education />
    <RelevantCoursework />
    <Projects />
    <Skills />
    <Experience />
    <Footer name="Jaime Castaneda" />
    </>
  );
}

export default App;
