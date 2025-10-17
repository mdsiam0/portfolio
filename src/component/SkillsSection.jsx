import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "ReactJS", icon: <SiReact className="text-blue-400" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-[#030517] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1500px] mt-40">
        <h2 className="text-3xl text-center  text-white font-main">My Skill Set</h2>
        <p className="text-center mt-2 mb-20">The tools and languages that I’m experienced in</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center bg-white p-4 m-2 rounded-lg shadow-md w-28 h-32"
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <p className="text-center font-semibold text-black">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move by one set (33.33% of total 3x duplicated items) */
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
