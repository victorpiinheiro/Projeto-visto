import styles from './TrustSection.module.css';
import { FiPhoneCall, FiClock } from "react-icons/fi";

export default function TrustSection() {
  return (
    <div className={styles.container}>
      
      <div className={styles.cardTop}>
        <div className={styles.titleTop}>
          <h1>Consultoria completa para tirar seu visto</h1>
        </div>
          <div className={styles.iconTop}>
            <FiPhoneCall className={styles.icon} />
          </div>
      </div>

      <div className={styles.cardBotton}>
        <div className={styles.iconBotton}>
            <FiClock className={styles.icon} />
        </div>
        <div className={styles.titleBotton}>
          <h1>Você está em boas mãos!</h1>

        </div>
      </div>

    </div>
  );
}