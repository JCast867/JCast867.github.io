import { FaBasketballBall, FaQuestionCircle } from "react-icons/fa";
import { PiCourtBasketball } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { BsBank2 } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";

export const Projects = () => {
    const projects = [
        {
            name: "Machine Learning Points Prediction",
            description: "Applied various machine learning models to predict NBA player performance using game-level statistics.",
            skills: ["Python", "R", "Decision Tree", "Random Forest"],
            icon: <FaBasketballBall size={60} />
        },
        {
            name: "Student Math Performance Analysis",
            description: "Used advanced data analysis strategies to discover how study habits, family background, and social behaviors affect student math scores.",
            skills: ["R", "PCA", "Lasso Regression", "CA"],
            icon: <FaQuestionCircle size={60} />
        },
        {
            name: "Personal Website",
            description: "Designed and developed a responsive personal website (yes, this one!) using React and Tailwind CSS to showcase my education, projects, and skills.",
            skills: ["React", "Tailwind", "JavaScript", "Git"],
            icon: <CgWebsite size={60} />
        },
        {
            name: "Full-Stack Finance Tracking Web App",
            description: "A full-stack finance tracking application that was developed in a group of 5 for our senior capstone class that got an 100%.",
            skills: ["Python", "Django", "Docker", "Git", "Bootstrap"],
            icon: <BsBank2 size={60} />
        },
        {
            name: "Full-Stack To-do List Web App",
            description: "A full-stack todo list application designed to track tasks that was developed in a group of 5 for our senior capstone class that got an 100%.",
            skills: ["Python", "Django", "Docker", "Git", "Bootstrap"],
            icon: <RiTodoFill size={60} />
        },
        {
            name: "Stock Trading System",
            description: "Designed a stock trading system using object-oriented programming using design patterns like factory, flyweight, singleton, facade, and factory.",
            skills: ["Java", "OOP", "GUI", "IntelliJ"],
            icon: <AiOutlineStock size={60} />
        },
        {
            name: "NBA Linear Regression Analysis",
            description: "Developed a model to accurately predict the points per game for NBA players. Conducted data exploration, data analysis, testing, and predictions.",
            skills: ["SAS", "Linear Regression"],
            icon: <PiCourtBasketball size={60} />
        },
        {
            name: "Chat System with File Transfers",
            description: "Developed a client-server chat application enabling real-time messaging and secure binary file transfers between multiple clients.",
            skills: ["Python", "Socket Programming", "Multithreading"],
            icon: <IoMdChatbubbles size={60} />
        },
        {
            name: "Automated Movie Rating Bot",
            description: "Collaborated with the Protiviti team to design and implement an automated bot to extract movie ratings from an Excel file.",
            skills: ["UiPath", "Excel"],
            icon: <BiMoviePlay size={60} />
        }
    ];

    return (
        <div className="container mx-auto p-4 py-8">
            <h1 className="text-4xl text-center py-8">Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                        <h5 className="text-center text-xl font-semibold text-gray-700 mb-2">{project.name}</h5>
                        <div className="mb-4">
                            {project.icon}
                        </div>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {project.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );

}

