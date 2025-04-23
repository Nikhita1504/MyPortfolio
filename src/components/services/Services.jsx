import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

// Icons for skills
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress, SiRedux, SiSass, SiFigma, SiCplusplus, SiMysql } from "react-icons/si";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  // { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Express", icon: <SiExpress />, color: "#3178C6" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },

  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },

];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I transform ideas into <span>digital experiences</span>
          <br /> that users love
        </p>
        <hr />
      </motion.div>
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="Collaborative team" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My</motion.b> Technical
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Skills</motion.b> & Tools
          </h1>
          <button>LEARN MORE</button>
        </div>
      </motion.div>
      
      <motion.div className="skillsContainer" variants={variants}>
        <div className="skillsGrid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skillItem"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ borderTop: `4px solid ${skill.color}` }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;