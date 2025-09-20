'use client'; 
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
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
].map(p => p.toUpperCase()); 

function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function JogoDaForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  
  const letrasErradas = letrasTentadas.filter(letra => !palavraSecreta.includes(letra));
  const numeroDeErros = letrasErradas.length;
  
  const jogoGanho = palavraSecreta.split('').every(letra => letrasTentadas.includes(letra));
  const jogoPerdido = numeroDeErros >= 6;
  const jogoAcabou = jogoGanho || jogoPerdido;

  
  function handleTentativa(letra) {
    if (jogoAcabou || letrasTentadas.includes(letra)) {
      return;
    }
    setLetrasTentadas(letrasAtuais => [...letrasAtuais, letra]);
  }

  
  function reiniciarJogo() {
    setPalavraSecreta(escolherPalavraAleatoria());
    setLetrasTentadas([]);
  }

  const teclado = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  
  return (
    <div className={styles.gameContainer}>
      <Link href="/">← Voltar ao Portfólio</Link>
      
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
      
      <div className={styles.guessedLettersContainer}>
          <p>Letras Tentadas: {letrasTentadas.join(', ')}</p>
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