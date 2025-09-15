'use client'; 
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import Image from 'next/image'; 
import styles from './JogoDaForca.module.css';



export default function JogoDaForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());
  const [letrasTentadas, setLetrasTentadas] = useState([]);

  // 2. Crio um novo estado para guardar o número de erros, começando em 0.
  const [numeroDeErros, setNumeroDeErros] = useState(0);

  
  return (
    <div className={styles.gameContainer}>
      <Link href="/" className={styles.backLink}>← Voltar ao Portfólio</Link>
      
      {/* (O status, a palavra e o teclado continuam aqui) */}
      
      {/* 3. Substituo o desenho do boneco pelo componente <Image> */}
      <div className={styles.drawingContainer}>
        <Image 
          // O caminho da imagem é dinâmico. Ele muda conforme o `numeroDeErros` aumenta.
          src={`/forca/forca-${numeroDeErros}.png`} 
          alt={`Forca com ${numeroDeErros} erros`}
          width={250}
          height={300}
        />
      </div>

      {/* ... (o resto do código JSX) ... */}
    </div>
  );
}