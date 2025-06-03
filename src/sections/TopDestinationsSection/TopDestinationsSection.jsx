import styles from './TopDestinationsSection.module.css';
import Button from '../../components/Button/Button'


import photo01 from '../../images/S04/photo01.png'
import photo02 from '../../images/S04/photo02.png'
import photo03 from '../../images/S04/photo03.png'
import photo04 from '../../images/S04/photo04.png'
import photo05 from '../../images/S04/photo05.png'
import photo06 from '../../images/S04/photo01.png'


export default function TopDestinationsSection() {
  const images = [photo01, photo02, photo03, photo04, photo05, photo06];

  return (
    <div className={styles.container}>
      <div className={styles.borderEffect}>

        <div className={styles.borderEffect1}> </div>
        <div className={styles.borderEffect2}> </div>
        <div className={styles.borderEffect3}> </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentButton}>

          <Button
            children={'Top Destinos'}
            color={'yellow'}
          />
        </div>
        <div className={styles.contentTitle}>
          <h2>Destinos mais procurados</h2>
        </div>
        <div className={styles.contentSubTitle}>
          <h6>Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?</h6>
        </div>

        <div className={styles.bottomBorderEffect}>
          <div className={styles.bottomBorderEffect1}> </div>
          <div className={styles.bottomBorderEffect2}> </div>
          <div className={styles.bottomBorderEffect3}> </div>
        </div>
        <div className={styles.contentButton}>

          <Button
            children={'Conheça mais'}
            color={'blue'}
            size={'lg'}
          />
        </div>

      </div>

      <div className={styles.contentImage}>
         {images.map((image, index) => (
            <img 
            key={index} src={image} alt="imagem de cidade" />
         ))}
      </div>


    </div>
  );
}