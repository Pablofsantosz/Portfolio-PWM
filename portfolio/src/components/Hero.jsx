import Image from 'next/image';
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
      <p className={styles.description}>
        Estudante de Ciência da Computação (5º período) na Universidade Católica de Pernambuco (UNICAP). Apaixonado por desenvolvimento de software e qualidade
      </p>
    </div>
  );
}