import Image from 'next/image';
import { FiDownload, FiMail } from 'react-icons/fi'; 
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/MinhaFoto.jpg"
        alt="Minha Foto"
        width={250}
        height={250}
        className={styles.avatar}
      />
      <h1 className={styles.name}>Pablo Felipe dos Santos</h1>
      <h2 className={styles.title}>Desenvolvedor de Software Web & QA </h2>
      <p className={styles.description}>
        Estudante de Ciência da Computação (5º período) na Universidade Católica de Pernambuco (UNICAP). Apaixonado por desenvolvimento de software e qualidade, busco sempre aprimorar minhas habilidades e contribuir para projetos significativos.
      </p>
      <br />
      <div className={styles.buttonContainer}>
        <Button text="Download CV">
          <FiDownload />
          //Como colocar procurar !!!
        </Button>
        <Button text="Contato">
          <FiMail />
          //Como colocar procurar !!!
        </Button>
      </div>
    </div>
  );
}