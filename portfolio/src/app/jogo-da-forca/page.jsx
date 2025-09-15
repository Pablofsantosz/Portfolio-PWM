'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './JogoDaForca.module.css';

// 1. Defino minha fonte de palavras.
const palavras = ["REACT", "NEXTJS", "JAVASCRIPT", "PORTFOLIO", "COMPONENTE"];

// 2. Crio uma função para me dar uma palavra aleatória.
function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function JogoDaForca() {
  // 3. Uso useState para guardar a palavra que o jogador precisa adivinhar.
  // A palavra inicial é escolhida assim que o componente é criado.
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());

  // 4. Crio outro useState para guardar a lista de letras que o jogador já usou.
  // Começa vazia.
  const [letrasTentadas, setLetrasTentadas] = useState([]);

  
  return (
    <div className={styles.gameContainer}>
      <Link href="/" className={styles.backLink}>← Voltar ao Portfólio</Link>
      <h1>Jogo da Forca</h1>
      <p>Palavra Secreta: {palavraSecreta}</p>
      <p>Letras Tentadas: {letrasTentadas.join(', ')}</p>
    </div>
  );
}