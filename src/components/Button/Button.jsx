// components/Button.js
import styles from './Button.module.css';

export default function YellowButton({ children, color, size, isAbsolute = false }) {
  return (
    <button className={`${styles.button} ${styles[color]} ${styles[size]} ${isAbsolute ? styles.absolute : ''}`}>
      {children}
    </button>
  );
}