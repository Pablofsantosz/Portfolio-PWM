import React from 'react'
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Mim</h2>
        <p className={styles.description}>
          Sou um desenvolvedor de software apaixonado por criar soluções que impactam positivamente a vida das pessoas. Atualmente cursando Ciência da Computação, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades. Tenho experiência com Python, C#, JavaScript, C e Java, e já utilizei frameworks como React, Django e Node.js em projetos acadêmicos e pessoais.
        </p>
        <p className={styles.description}>
          No meu tempo livre, gosto de explorar projetos open-source, participar de hackathons e ler sobre as últimas tendências em inteligência artificial e desenvolvimento web.
        </p>
      </div>
    </section>
  )
}

export default About