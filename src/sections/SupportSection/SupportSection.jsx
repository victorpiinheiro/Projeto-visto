import styles from './SupportSection.module.css';
import Button from '../../components/Button/Button';
import { GoArrowUpRight } from "react-icons/go";



export default function SupportSection() {
  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <h1>Está com alguma dúvida ?</h1>
        
        <p>Entre em contato através do nosso canal direto ao cliente através do botão abaixo</p>
        <Button color={'blue'} children={'Central de Atendimento'} />
      </div>


      <div className={styles.rigthText}>
        <div className={styles.text}>
          <h1>Receba Novidades</h1>
        </div>

        <div className={styles.icon}>
          <GoArrowUpRight size={40} />

        </div>

      </div>
    </div>

  );
}