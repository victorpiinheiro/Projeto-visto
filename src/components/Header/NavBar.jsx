import styles from'./NavBar.module.css';

export default function NavBar({src}) {
return (
  <div className={styles.navbar}>
    <div className={styles['nav-logo']}>
      <img src={src} alt="log-nav" />
    </div>

    <div className={styles["nav-links"]}>
      <ul>
        <li><a href=""><strong>Home</strong></a></li>
        <li><a href="">Quem somos</a></li>
        <li><a href="">Serviços</a></li>
        <li><a href="">Contato</a></li>
      </ul>
    </div>
  </div>
)
}