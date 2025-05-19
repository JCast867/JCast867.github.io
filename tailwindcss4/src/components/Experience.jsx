import "../App.css";
import { TbBrandWalmart } from "react-icons/tb";

export default function Experience() {
    const experience = [
        { role: "Replenishment Associate", company: "Walmart", started: "Oct 2021", ended: "Present", icon: <TbBrandWalmart size={60} className=" group-hover:text-[#ffc220] transition-colors duration-300" /> },
        { role: "Cart Attendant", company: "Walmart", started: "Dec 2019", ended: "Jun 2021", icon: <TbBrandWalmart size={60} className="group-hover:text-[#ffc220] transition-colors duration-300" /> }
    ];

    return (
        <div className="container mx-auto p-4 py-8">
            <h1 className="text-4xl text-center py-8">Experience</h1>

            <div className="flex flex-col gap-4">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className="group flex skill-card mx-auto items-center p-4 bg-white rounded-2xl shadow-md border border-gray-200 max-w-md w-full"
                    >
                        <div className="mr-4">{exp.icon}</div>

                        <div>
                            <h2 className="text-xl text-start font-semibold mb-1">{exp.company}</h2>
                            <p className="text-sm text-gray-600">{exp.role}</p>
                            <p className="text-xs text-gray-500">{exp.started} – {exp.ended}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
