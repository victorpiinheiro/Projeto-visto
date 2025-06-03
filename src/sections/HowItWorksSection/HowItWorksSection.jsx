import styles from './HowItWorksSection.module.css';
import Button from '../../components/Button/Button';

import turistaPhoto from '../../images/S02/turista.png'

export default function HowItWorksSection() {
  return (
    <div className={styles.container}>

      <Button color={'yellow'} children={'Veja como funciona'} />
      <div className={styles['text-top']}>
        <div className={styles.title}>
          <h1>Sua tranquilidade não tem preço!</h1>
        </div>

        <div className={styles.description}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>

      <div className={styles.sectionWrapper}>

        <div className={styles.image}>
          <img src={turistaPhoto} alt="turista" />
        </div>
        <div className={styles.content}>
          <h1>Etapa inicial</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, placeat magni!</p>

          <h1>Processo de Entrevista</h1>
          <p>+ Leia mais</p>

          <h1>Entrega de Documentos</h1>
          <p>+ Leia Mais</p>
        </div>

      </div>

    </div>
  );
}