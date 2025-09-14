import React from 'react'
import styles from './Button.module.css';

const Button = ({children,text}) => {
  return (
    <button className={styles.button}>
      {children}
      <span>{text}</span>
    </button>
  )
}

export default Button