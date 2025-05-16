import "../App.css";
import { FaPython } from "react-icons/fa"; // python icon
import { SiDjango } from "react-icons/si"; // django icon
import { FaHtml5 } from "react-icons/fa"; // html icon
import { FaBootstrap } from "react-icons/fa"; // bootstrap icon
import { FaDocker } from "react-icons/fa"; // docker icon
import { FaJava } from "react-icons/fa"; // java icon
import { SiC } from 'react-icons/si'; // c icon
import { SiJavascript } from "react-icons/si"; // javascript icon
import { FaDatabase } from "react-icons/fa"; // sql icon
import { DiScala } from "react-icons/di"; // scala icon
import { SiR } from "react-icons/si"; // r icon
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
import { SiTailwindcss } from "react-icons/si"; // tailwind icon
import { FaGithub } from "react-icons/fa"; // github icon
import { SiSelenium } from "react-icons/si"; // selenium icon
import { SiJunit5 } from "react-icons/si"; // junit icon
import { SiJira } from "react-icons/si"; // jira logo
import { SiChartdotjs } from "react-icons/si"; // chart.js icon


export default function Skills() {
    const skills = [
        { name: "Python", started: "2022-09", type: "Programming Language", icon: <FaPython size={60} className="group-hover:text-[#3776AB] transition-colors duration-300" />},
        { name: "Java", started: "2023-03", type: "Programming Language", icon: <FaJava size={60} className="group-hover:text-[#f89820] transition-colors duration-300" /> },
        { name: "C", started: "2023-09", type: "Programming Language", icon: <SiC size={60} className="group-hover:text-[#3776AB] transition-colors duration-300" /> },
        { name: "JavaScript", started: "2024-08", type: "Programming Language", icon: <SiJavascript size={60} className="group-hover:text-[#F7DF1E] transition-colors duration-300" /> },
        { name: "R", started: "2023-03", type: "Programming/Scripting Language", icon: <SiR size={60} className="group-hover:text-[#165CAA] transition-colors duration-300" /> },
        { name: "Scala", started: "2024-01", type: "Programming Language", icon: <DiScala size={60} className="group-hover:text-[#DE3423] transition-colors duration-300" /> },
        { name: "SAS", started: "2024-03", type: "Statistical Analytic System" },
        { name: "SQL", started: "2024-01", type: "Query Language", icon: <FaDatabase size={60} className="group-hover:text-[#0072B1] transition-colors duration-300" /> },
        { name: "HTML", started: "2023-09", type: "Markup Language", icon: <FaHtml5 size={60} className="group-hover:text-[#E34C26] transition-colors duration-300" /> },
        { name: "CSS", started: "2023-09", type: "Stylesheet Language", icon: <FaCss3Alt size={60} className="group-hover:text-[#264de4] transition-colors duration-300" /> },
        { name: "Django", started: "2024-09", type: "Python Framework", icon: <SiDjango size={60} className="group-hover:text-[#092E20] transition-colors duration-300" /> },
        { name: "React", started: "2024-11", type: "JavaScript Library", icon: <FaReact size={60} className="group-hover:text-[#61DAFB] transition-colors duration-300" /> },
        { name: "Bootstrap", started: "2024-09", type: "CSS Framework", icon: <FaBootstrap size={60} className="group-hover:text-[#563D7C] transition-colors duration-300" /> },
        { name: "Tailwind", started: "2025-05", type: "CSS Framework", icon: <SiTailwindcss size={60} className="group-hover:text-[#1F49C9] transition-colors duration-300" /> },
        { name: "Git", started: "2023-09", type: "Version Control", icon: <FaGitAlt size={60} className="group-hover:text-[#F1502F] transition-colors duration-300" /> },
        { name: "GitHub", started: "2023-09", type: "Repository Hosting", icon: <FaGithub size={60} className="group-hover:text-[#181717] transition-colors duration-300" /> },
        { name: "UiPath", started: "2024-01", type: "Robotic Process Automation", icon: <SiUipath size={60} className="group-hover:text-[#FF4D00] transition-colors duration-300" /> },
        { name: "Oracle", started: "2023-01", type: "Relational Database", icon: <SiOracle size={60} className="group-hover:text-[#C74634] transition-colors duration-300" /> },
        { name: "PostgreSQL", started: "2024-09", type: "Relational Database", icon: <BiLogoPostgresql size={60} className="group-hover:text-[#0064a5] transition-colors duration-300" />},
        { name: "Docker", started: "2024-09", type: "Container Application Development", icon: <FaDocker size={60} className="group-hover:text-[#0db7ed] transition-colors duration-300" /> },
        { name: "RStudio", started: "2023-09", type: "R IDE", icon: <SiRstudioide size={60} className="group-hover:text-[#4AA4DE] transition-colors duration-300" /> },
        { name: "IntelliJ", started: "2023-09", type: "Java IDE", icon: <SiIntellijidea size={60} className="group-hover:text-[#000000] transition-colors duration-300" /> },
        { name: "PyCharm", started: "2024-02", type: "Python IDE", icon: <SiPycharm size={60} className="group-hover:text-[#000000] transition-colors duration-300" /> },
        { name: "VS Code", started: "2024-11", type: "Code Editor", icon: <VscVscodeInsiders size={60} className="group-hover:text-[#0078d7] transition-colors duration-300" /> },
        { name: "Postman", started: "2024-10", type: "API Testing", icon: <SiPostman size={60} className="group-hover:text-[#EF5B25] transition-colors duration-300" /> },
        { name: "Amazon Web Services", started: "2024-09", type: "Cloud Computing", icon: <FaAws size={60} className="group-hover:text-[#FF9900] transition-colors duration-300" /> },
        { name: "JUnit", started: "2024-01", type: "Testing Framework", icon: <SiJunit5 size={60} className="group-hover:text-[#D52B1E] transition-colors duration-300" /> },
        { name: "Selenium", started: "2024-01", type: "Web Testing Framework", icon: <SiSelenium size={60} className="group-hover:text-[#59EB00] transition-colors duration-300" /> },
        { name: "Jira", started: "2024-01", type: "Project Management", icon: <SiJira size={60} className="group-hover:text-[#0052cc] transition-colors duration-300" /> },
        { name: "Chart.js", started: "2024-01", type: "Data Visualization", icon: <SiChartdotjs size={60} className="group-hover:text-[#2965f1] transition-colors duration-300" /> },
    ];

    function getExperience(startDateStr) {
        const startDate = new Date(startDateStr);
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
    }

    return (
        <div className="container mx-auto p-4 py-8">
            <h1 className="text-4xl text-center py-8">Skills and Tools</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group skill-card flex items-center h-40 w-full p-4 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
                    >
                        {/* icon on the left */}
                        <div className="mr-4">{skill.icon}</div>

                        {/* text on the right */}
                        <div>
                            <h2 className="text-xl font-semibold mb-1">{skill.name}</h2>
                            <p className="text-sm text-gray-600">Type: {skill.type}</p>
                            <p className="text-sm text-gray-600">Experience: {getExperience(skill.started)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}