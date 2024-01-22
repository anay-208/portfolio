import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faAws,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

type skillT = {
    name: string;
    level: string;
    icon: any;
}

function Skill({skill} : {skill: skillT}){
    return (
        <div  className="flex gap-1 ">
                <div className="w-10">
                  <FontAwesomeIcon icon={skill.icon} className="mt-1" />
                </div>
                <h2 className="text-emerald-300">{skill.name}: </h2>
                <p>{skill.level}</p>
              </div>
    )
}


export default function Skills() {
  const skills = [
    { name: "React", level: "Intermediate", icon: faReact },
    { name: "JavaScript", level: "Intermediate", icon: faJs },
    { name: "Next.js", level: "Beginner", icon: faReact }, // Next.js doesn't have a specific icon, using React's
    { name: "HTML", level: "Intermediate", icon: faHtml5 },
    { name: "CSS", level: "Intermediate", icon: faCss3Alt },
    { name: "AWS", level: "Beginner", icon: faAws },
    { name: "Nginx", level: "Beginner", icon: faServer },
    { name: "Python", level: "Beginner", icon: faPython },
  ];
  return (
    <div id="skills" className="min-h-screen bg-slate-900 py-4">
      <h1 className="text-center text-5xl ">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-3xl min-h-screen mt-12 sm:mt-4">
        <div className="flex justify-evenly items-center flex-col h-full">
          {skills.slice(0, skills.length / 2).map((skill, index) => (
            <Skill key={index} skill={skill}/>
          ))}
        </div>
        <div className="flex justify-evenly items-center flex-col h-full">
          {skills
            .slice(skills.length / 2, skills.length)
            .map((skill, index) => (
                <Skill key={index} skill={skill}/>
            ))}
        </div>
      </div>
    </div>
  );
}
