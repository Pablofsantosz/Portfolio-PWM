'use client'; 
import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image'; // Importamos o componente de Imagem
import styles from './JogoDaForca.module.css';

const palavras = [
    "cachorro", "gato", "sol", "lua", "estrela",
    "carro", "floresta", "oceano", "fogo", "montanha",
    "chuva", "vento", "cidade", "amor", "vida",
    "tempo", "sonho", "livro", "café", "música",
    "computador", "praia", "flor", "rio", "amizade",
    "trabalho", "paz", "futuro", "história", "esperança",
    "viagem", "jogo", "arte", "cor", "família",
    "saúde", "sabedoria", "natureza", "cultura", "alegria"
  ];

function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function JogoDaForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  
  
  const [numeroDeErros, setNumeroDeErros] = useState(0);


  
  return (
    <div className={styles.gameContainer}>
      <Link href="/" className={styles.backLink}>← Voltar ao Portfólio</Link>
      
      <h1>Jogo da Forca</h1>
      
     
      <div className={styles.drawingContainer}>
        <Image 
          
          src={`/forca/forca-${numeroDeErros}.png`} 
          alt={`Forca com ${numeroDeErros} erros`}
          width={250}
          height={300}
        />
      </div>

      
      <div className={styles.wordContainer}>
        
      </div>
      <div className={styles.keyboard}>
        
      </div>
    </div>
  );
}