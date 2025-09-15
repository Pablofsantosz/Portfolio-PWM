'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './JogoDaForca.module.css';

                      // 1.lista de palavras
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

                      // 2. function para retornar uma palavra random 
function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function JogoDaForca() {
  // 3. Uso a minha nova função para definir a palavra inicial do jogo.
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());

 
  return (
    <div className={styles.gameContainer}>
      <Link href="/">← Voltar</Link>
        <h1>Jogo da Forca</h1>
        <p>Adivinhe a palavra:</p>
      <div className={styles.wordContainer}>
         {palavraSecreta}
          {palavraSecreta.split('').map((letra, index) => (
          <span key={index} className={styles.letter}>
            _
          </span>
        ))}
      </div>
    </div>
    
  );
}