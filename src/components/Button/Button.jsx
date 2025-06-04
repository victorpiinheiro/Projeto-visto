// components/Button.js
import styles from './Button.module.css';

export default function YellowButton({ children, color, size, isAbsolute = false, onClick }) {
  return (
    <button className={`${styles.button} ${styles[color]} ${styles[size]} ${isAbsolute ? styles.absolute : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}