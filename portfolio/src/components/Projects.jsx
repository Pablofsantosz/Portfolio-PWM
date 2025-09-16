import Image from 'next/image';
import styles from './Projects.module.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const projectData = [
  {
    title: 'FastRx',
    description: 'descrição',
    image: '/projects/proj2.jpg', 
    repoLink: '#'
    
    
  },
  {
    title: 'Spotify Clone',
    description: 'descrição',
    image: '/projects/proj2.jpg', 
    repoLink: '#'
    
    
  }
 

];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.grid}>
          {projectData.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.links}>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Repositório no GitHub">
                    <FiGithub size={24} />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}