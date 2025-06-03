
import styles from './Card.module.css';
import Button from '../Button/Button';

export default function Card({ image, plan1, plan2, titulo, atendimento, tempo, preco }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="card" />

      <div className={styles.planButtons}>
        <Button size={'lm'} color="white">{plan1}</Button>
        <Button size={'lm'} color={'gray'}>{plan2}</Button>
      </div>

      <div className={styles.descriptionCard}>
        <h2>{titulo}</h2>
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.infoAtendimento}>
          <h3>Atendimento</h3>
          <p>{atendimento}</p>
        </div>
        <div className={styles.infoTempo}>
          <h3>Tempo</h3>
          <p>{tempo}</p>
        </div>
      </div>

      <div className={styles.cardValores}>
        <div>
          <p>A partir de</p>
          <h3>{preco}</h3>
        </div>
        <div className={styles.cardContratar}>
          <Button size={'lg'} color="blue">Contratar</Button>
        </div>
      </div>
    </div>
  );
}
