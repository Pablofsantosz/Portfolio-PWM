import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.navbar}>
            <nav>
                <ul className={styles.navLista}>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>
            </nav>
        </header>
  )
}

export default NavBar