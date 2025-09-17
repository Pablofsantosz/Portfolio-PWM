'use client'; 
import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import styles from './JogoDaForca.module.css';

const palavras = ["REACT", "NEXTJS", "JAVASCRIPT", "PORTFOLIO", "COMPONENTE"];

function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function JogoDaForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  
  
  const letrasErradas = letrasTentadas.filter(letra => !palavraSecreta.includes(letra));
  const numeroDeErros = letrasErradas.length;
  
  
  const maximoDeErros = 6;
  const jogoGanho = palavraSecreta.split('').every(letra => letrasTentadas.includes(letra));
  const jogoPerdido = numeroDeErros >= maximoDeErros;
  const jogoAcabou = jogoGanho || jogoPerdido;

  function handleTentativa(letra) {
    if (jogoAcabou || letrasTentadas.includes(letra)) return;
    setLetrasTentadas(letrasAtuais => [...letrasAtuais, letra]);
  }

  
  function reiniciarJogo() {
    setPalavraSecreta(escolherPalavraAleatoria());
    setLetrasTentadas([]);
  }

  const teclado = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  
  return (
    <div className={styles.gameContainer}>
      <Link href="/">← Voltar</Link>
      
      <div className={styles.status}>
        {jogoGanho && "Você Venceu!"}
        {jogoPerdido && "Você Perdeu!"}
      </div>

      <Image 
        src={`/forca/forca-${numeroDeErros}.png`} 
        alt={`Forca com ${numeroDeErros} erros`}
        width={250}
        height={300}
      />

      <div className={styles.wordContainer}>
        {palavraSecreta.split('').map((letra, index) => (
          <span key={index} className={styles.letter}>
            {letrasTentadas.includes(letra) || jogoPerdido ? letra : '_'}
          </span>
        ))}
      </div>
      
      
      {jogoAcabou ? (
        <div className={styles.restartContainer}>
          <p>A palavra era: {palavraSecreta}</p>
          <button onClick={reiniciarJogo} className={styles.restartButton}>
            Jogar Novamente
          </button>
        </div>
      ) : (
        <div className={styles.keyboard}>
          {teclado.map(letra => (
              <button 
                key={letra} 
                onClick={() => handleTentativa(letra)}
                disabled={letrasTentadas.includes(letra)}
              >
                {letra}
              </button>
          ))}
        </div>
      )}
    </div>
  );
}