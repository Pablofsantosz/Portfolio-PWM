import styles from './Skills.module.css';
import { FaPython, FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiDjango } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb'; 
//https://react-icons.github.io/react-icons/(site icones usados, react-icons)
const skills = [
  { name: 'Python', icon: <FaPython size={50} /> },
  { name: 'C#', icon: <TbBrandCSharp size={50} /> }, 
  { name: 'JavaScript', icon: <SiJavascript size={50} /> },
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} /> },
  { name: 'Django', icon: <SiDjango size={50} /> },
  { name: 'Java', icon: <FaJava size={50} /> },
  { name: 'Git', icon: <FaGitAlt size={50} /> },
];

const Skills = () => {
    return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Habilidades</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default Skills