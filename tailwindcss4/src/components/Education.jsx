import { RiGraduationCapLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";

export default function Education() {
    const education = {
        university: "DePaul University",
        major: "Computer Science",
        concentration: "Software Development",
        minor: "Data Science",
        graduation: "March 2025",
        gpa: "3.58",
    }

    const courses = [
        "Foundations of Artificial Intelligence",
        "Fundamentals of Data Science",
        "Object-Oriented Software Development",
        "Data Analysis & Regression",
        "Data Structures & Algorithms",
        "Advanced Data Analysis",
        "Machine Learning",
        "Computer Systems",
        "Distributed Systems",
        "Database Systems",
        "Software Testing",
        "Software Projects",
    ];

    return (
        <div className="container mx-auto p-4 py-8">
            <h1 className="text-4xl text-center py-8">Education</h1>

            <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-gray-200">

                <div className="grid grid-cols-2 gap-6">
                    <div>

                        <p className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                            <RiGraduationCapLine className="size-6" />
                            {education.university}
                        </p>
                        <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                            Graduated: {education.graduation}
                        </p>
                        <p><span className="font-medium text-gray-600">Major:</span> {education.major}</p>
                        <p><span className="font-medium text-gray-600">Concentration:</span> {education.concentration}</p>
                        <p><span className="font-medium text-gray-600">Minor:</span> {education.minor}</p>
                        <p><span className="font-medium text-gray-600">GPA:</span> {education.gpa}</p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <FaBook className="size-5" />
                            Relevant Coursework
                        </p>
                        <ul className="grid grid-cols-3 list-disc list-inside text-gray-600 text-sm gap-x-4">
                            {courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}